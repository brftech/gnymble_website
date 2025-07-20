import { logger } from '../../lib/logger';
import { rateLimit } from '../../lib/rateLimit';
import { submitHubspotContact, sendNotificationEmail } from '../../lib/hubspot';

// Apply rate limiting (more lenient in development)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === 'development' ? 50 : 3 // limit each IP to 50 demo requests per 15 minutes in dev, 3 in production
});

export default async function handler(req, res) {
  // Apply rate limiting
  return new Promise((resolve) => {
    limiter(req, res, () => {
      handleDemoRequest(req, res).then(resolve);
    });
  });
}

async function handleDemoRequest(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Submit to HubSpot with full validation and processing
    const hubspotResult = await submitHubspotContact(req.body, 'demo');

    // Check for validation errors
    if (!hubspotResult.success && hubspotResult.validationErrors) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: hubspotResult.validationErrors
      });
    }

    // Log the demo request (for debugging)
    if (process.env.NODE_ENV === 'development') {
      const { firstName, lastName, email, company, useCase } = hubspotResult.data;
      console.log('Demo request submission:', {
        name: `${firstName} ${lastName}`,
        email,
        company,
        useCase: useCase.substring(0, 100) + '...',
        timestamp: new Date().toISOString()
      });
    }

    // Log additional info for manual review
    logger.info('Demo request additional info', {
      useCase: hubspotResult.data.useCase,
      teamSize: hubspotResult.data.teamSize,
      timeline: hubspotResult.data.timeline,
      contactEmail: hubspotResult.data.email
    });

    // Send notification email using shared utility
    await sendNotificationEmail(hubspotResult.data, 'demo', {
      useCase: hubspotResult.data.useCase.substring(0, 100) + '...',
      teamSize: hubspotResult.data.teamSize,
      timeline: hubspotResult.data.timeline
    });

    res.status(200).json({ 
      message: 'Demo request submitted successfully',
      hubspotConfigured: hubspotResult.hubspotConfigured
    });

  } catch (error) {
    logger.error('Demo request submission error', { error });
    res.status(500).json({ 
      message: 'Failed to submit demo request. Please try again or contact us directly.' 
    });
  }
}
