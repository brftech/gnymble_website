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

    // Check for validation errors or other failures
    if (!hubspotResult.success) {
      console.log('HubSpot result:', hubspotResult); // Debug log
      if (hubspotResult.validationErrors) {
        return res.status(400).json({ 
          message: 'Validation failed',
          errors: hubspotResult.validationErrors
        });
      } else {
        return res.status(500).json({ 
          message: hubspotResult.reason || 'Form submission failed',
          error: hubspotResult.error
        });
      }
    }

    // Log the demo request (for debugging)
    if (process.env.NODE_ENV === 'development') {
      const { firstName, lastName, email, company, message } = hubspotResult.data;
      console.log('Demo request submission:', {
        name: `${firstName} ${lastName}`,
        email,
        company,
        message: message ? message.substring(0, 100) + '...' : 'No message',
        timestamp: new Date().toISOString()
      });
    }

    // Log additional info for manual review
    console.log('Demo request additional info:', {
      message: hubspotResult.data.message,
      contactEmail: hubspotResult.data.email
    });

    // Send notification email using shared utility (optional)
    try {
      await sendNotificationEmail(hubspotResult.data, 'demo', {
        message: hubspotResult.data.message ? hubspotResult.data.message.substring(0, 100) + '...' : 'No message'
      });
    } catch (error) {
      console.log('Notification email failed:', error.message);
      // Continue without notification email
    }

    res.status(200).json({ 
      message: 'Demo request submitted successfully',
      hubspotConfigured: hubspotResult.hubspotConfigured
    });

  } catch (error) {
    console.error('Demo request submission error:', error);
    res.status(500).json({ 
      message: 'Failed to submit demo request. Please try again or contact us directly.' 
    });
  }
}
