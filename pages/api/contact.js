import { rateLimit } from '../../lib/rateLimit';
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
    // Submit to HubSpot with full validation and processing
    const hubspotResult = await submitHubspotContact(req.body, 'contact');

    // Check for validation errors or other failures
    if (!hubspotResult.success) {
      console.log('HubSpot result:', hubspotResult); // Debug log
      if (hubspotResult.validationErrors) {
        return res.status(400).json({ 
          message: 'Validation failed',
          errors: hubspotResult.validationErrors
        });
      } else if (hubspotResult.isDuplicate) {
        // Handle duplicate contact case with user-friendly message
        return res.status(409).json({ 
          message: 'Email already registered',
          error: hubspotResult.error,
          isDuplicate: true
        });
      } else {
        return res.status(500).json({ 
          message: hubspotResult.reason || 'Form submission failed',
          error: hubspotResult.error
        });
      }
    }

    // Log the contact submission (for debugging)
    if (process.env.NODE_ENV === 'development') {
      const { firstName, lastName, email, company, solutionInterest } = hubspotResult.data;
      console.log('Contact form submission:', {
        name: `${firstName} ${lastName}`,
        email,
        company,
        solution: solutionInterest,
        timestamp: new Date().toISOString()
      });
    }

    // Send notification email using shared utility (optional)
    try {
      await sendNotificationEmail(hubspotResult.data, 'contact', {
        solution: hubspotResult.data.solutionInterest,
        message: hubspotResult.data.message.substring(0, 100) + '...'
      });
    } catch (error) {
      console.log('Notification email failed:', error.message);
      // Continue without notification email
    }

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      hubspotConfigured: hubspotResult.hubspotConfigured
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      message: 'Failed to submit contact form. Please try again or contact us directly.' 
    });
  }
} 