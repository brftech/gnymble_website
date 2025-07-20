import { logger } from '../../lib/logger';
import { validateEnv, getEnvVar } from '../../lib/env';
import { rateLimit } from '../../lib/rateLimit';
import { validateContactForm, sanitizeContactForm } from '../../lib/validation';

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
      firstname,
      lastname,
      email,
      phone,
      company,
      jobtitle,
      message,
      solution_interest
    } = sanitizedData;

    // Log the contact submission (for debugging)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', {
        name: `${firstname} ${lastname}`,
        email,
        company,
        solution: solution_interest,
        timestamp: new Date().toISOString()
      });
    }

    // HubSpot API configuration
    const HUBSPOT_API_KEY = getEnvVar('HUBSPOT_API_KEY');
    const HUBSPOT_PORTAL_ID = getEnvVar('HUBSPOT_PORTAL_ID');
    const HUBSPOT_FORM_ID = getEnvVar('HUBSPOT_FORM_ID');

    // If HubSpot is configured, try to submit
    if (HUBSPOT_API_KEY) {
      try {
        // Create contact in HubSpot
        const contactData = {
          properties: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone || '',
            company: company || '',
            jobtitle: jobtitle || '',
            message: message,
            solution_interest: solution_interest || 'general',
            hs_lead_status: 'NEW',
            lifecyclestage: 'lead'
          }
        };

        // Submit to HubSpot Contacts API
        const contactResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        });

        if (contactResponse.ok) {
          const contactResult = await contactResponse.json();
          logger.info('Contact created in HubSpot', { id: contactResult.id });
        } else {
          const errorData = await contactResponse.text();
          logger.error('HubSpot contact creation failed', { error: errorData });
        }

        // If you have a HubSpot form, also submit to the form
        if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID) {
          const formData = new URLSearchParams();
          formData.append('firstname', firstname);
          formData.append('lastname', lastname);
          formData.append('email', email);
          if (phone) formData.append('phone', phone);
          if (company) formData.append('company', company);
          if (jobtitle) formData.append('jobtitle', jobtitle);
          formData.append('message', message);
          if (solution_interest) formData.append('solution_interest', solution_interest);

          const formResponse = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: formData.toString(),
            }
          );

                  if (!formResponse.ok) {
          logger.warn('HubSpot form submission failed, but contact was created');
        }
        }
      } catch (hubspotError) {
        logger.error('HubSpot integration error', { error: hubspotError });
        // Continue with success response even if HubSpot fails
      }
    } else {
      logger.info('HubSpot not configured - contact logged only');
    }

    // Send notification email (optional)
    if (process.env.NOTIFICATION_EMAIL) {
      try {
        await fetch('/api/send-notification', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: process.env.NOTIFICATION_EMAIL,
            subject: 'New Contact Form Submission - Gnymble',
            data: {
              name: `${firstname} ${lastname}`,
              email,
              company,
              solution: solution_interest,
              message: message.substring(0, 100) + '...'
            }
          }),
        });
      } catch (emailError) {
        logger.warn('Failed to send notification email', { error: emailError });
      }
    }

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      hubspotConfigured: !!HUBSPOT_API_KEY
    });

  } catch (error) {
    logger.error('Contact form submission error', { error });
    res.status(500).json({ 
      message: 'Failed to submit contact form. Please try again or contact us directly.' 
    });
  }
} 