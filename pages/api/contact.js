export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      firstname,
      lastname,
      email,
      phone,
      company,
      jobtitle,
      message,
      solution_interest
    } = req.body;

    // Validate required fields
    if (!firstname || !lastname || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Log the contact submission (for debugging)
    console.log('Contact form submission:', {
      name: `${firstname} ${lastname}`,
      email,
      company,
      solution: solution_interest,
      timestamp: new Date().toISOString()
    });

    // HubSpot API configuration
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
    const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
    const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID;

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
          console.log('Contact created in HubSpot:', contactResult.id);
        } else {
          const errorData = await contactResponse.text();
          console.error('HubSpot contact creation failed:', errorData);
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
            console.warn('HubSpot form submission failed, but contact was created');
          }
        }
      } catch (hubspotError) {
        console.error('HubSpot integration error:', hubspotError);
        // Continue with success response even if HubSpot fails
      }
    } else {
      console.log('HubSpot not configured - contact logged only');
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
        console.warn('Failed to send notification email:', emailError);
      }
    }

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      hubspotConfigured: !!HUBSPOT_API_KEY
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      message: 'Failed to submit contact form. Please try again or contact us directly.' 
    });
  }
} 