import { logger } from '../../lib/logger';
import { validateEnv, getEnvVar } from '../../lib/env';
import { rateLimit } from '../../lib/rateLimit';
import { validateContactForm, sanitizeContactForm } from '../../lib/validation';
import { submitHubspotContact, sendNotificationEmail } from '../../lib/hubspot';

// Apply rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 contact form submissions per 15 minutes
});

export default async function handler(req, res) {
  // Apply rate limiting
  return new Promise((resolve) => {
    limiter(req, res, () => {
      handleContactForm(req, res).then(resolve);
    });
  });
}

async function handleContactForm(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Sanitize and validate input
    const sanitizedData = sanitizeContactForm(req.body);
    const validation = validateContactForm(sanitizedData);

    if (!validation.isValid) {
      return res.status(400).json({ 
        message: 'Validation failed',
        errors: validation.errors
      });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      message,
      solutionInterest
    } = sanitizedData;

    // Log the contact submission (for debugging)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: `${firstName} ${lastName}`,
        email,
        company,
        solution: solutionInterest,
        timestamp: new Date().toISOString()
      });
    }

    // Submit to HubSpot using shared utility
    const hubspotResult = await submitHubspotContact(sanitizedData, 'contact');

    // Send notification email using shared utility
    await sendNotificationEmail(sanitizedData, 'contact', {
      solution: solutionInterest,
      message: message.substring(0, 100) + '...'
    });

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      hubspotConfigured: hubspotResult.hubspotConfigured
    });

  } catch (error) {
    logger.error('Contact form submission error', { error });
    res.status(500).json({ 
      message: 'Failed to submit contact form. Please try again or contact us directly.' 
    });
  }
} 