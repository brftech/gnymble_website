import { logger } from '../../lib/logger';
import { validateEnv, getEnvVar } from '../../lib/env';
import { rateLimit } from '../../lib/rateLimit';

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
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      industry,
      useCase,
      teamSize,
      timeline
    } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !company || !industry || !useCase) {
      return res.status(400).json({ 
        message: 'Missing required fields',
        errors: ['firstName', 'lastName', 'email', 'company', 'industry', 'useCase'].filter(field => !req.body[field])
      });
    }

    // Log the demo request (for debugging)
    if (process.env.NODE_ENV === 'development') {
      console.log('Demo request submission:', {
        name: `${firstName} ${lastName}`,
        email,
        company,
        industry,
        useCase: useCase.substring(0, 100) + '...',
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
        // Create contact in HubSpot (using only basic standard properties)
        const contactData = {
          properties: {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone || '',
            company: company,
            industry: industry,
            hs_lead_status: 'NEW',
            lifecyclestage: 'lead'
          }
        };

        // Log additional info for manual review
        logger.info('Demo request additional info', {
          useCase,
          teamSize,
          timeline,
          contactEmail: email
        });

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
          logger.info('Demo contact created in HubSpot', { id: contactResult.id });
        } else {
          const errorData = await contactResponse.text();
          logger.error('HubSpot demo contact creation failed', { error: errorData });
        }

        // If you have a HubSpot form, also submit to the form
        if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID) {
          const formData = new URLSearchParams();
          formData.append('firstname', firstName);
          formData.append('lastname', lastName);
          formData.append('email', email);
          if (phone) formData.append('phone', phone);
          formData.append('company', company);
          formData.append('industry', industry);

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
            logger.warn('HubSpot demo form submission failed, but contact was created');
          }
        }
      } catch (hubspotError) {
        logger.error('HubSpot demo integration error', { error: hubspotError });
        // Continue with success response even if HubSpot fails
      }
    } else {
      logger.info('HubSpot not configured - demo request logged only');
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
            subject: 'New Demo Request - Gnymble',
            data: {
              name: `${firstName} ${lastName}`,
              email,
              company,
              industry,
              useCase: useCase.substring(0, 100) + '...',
              teamSize,
              timeline
            }
          }),
        });
      } catch (emailError) {
        logger.warn('Failed to send demo notification email', { error: emailError });
      }
    }

    res.status(200).json({ 
      message: 'Demo request submitted successfully',
      hubspotConfigured: !!HUBSPOT_API_KEY
    });

  } catch (error) {
    logger.error('Demo request submission error', { error });
    res.status(500).json({ 
      message: 'Failed to submit demo request. Please try again or contact us directly.' 
    });
  }
}
