import { logger } from './logger';
import { getEnvVar } from './env';
import { getSiteConfig } from '@percytech/shared';
import { validateContactForm, validateDemoForm, sanitizeContactForm, sanitizeDemoForm } from './validation';

/**
 * Submit contact data to HubSpot with full validation and processing
 * @param {Object} rawData - Raw form data from request
 * @param {string} type - Type of submission ('contact' or 'demo')
 * @param {Object} options - Additional options
 * @returns {Promise<Object>} - Result object with success status and details
 */
export async function submitHubspotContact(rawData, type = 'contact', options = {}) {
  const HUBSPOT_API_KEY = getEnvVar('HUBSPOT_API_KEY');
  const HUBSPOT_PORTAL_ID = getEnvVar('HUBSPOT_PORTAL_ID');
  const HUBSPOT_FORM_ID = getEnvVar('HUBSPOT_FORM_ID');

  // Validate and sanitize input based on type
  let sanitizedData, validation;
  
  if (type === 'contact') {
    sanitizedData = sanitizeContactForm(rawData);
    validation = validateContactForm(sanitizedData);
  } else if (type === 'demo') {
    sanitizedData = sanitizeDemoForm(rawData);
    validation = validateDemoForm(sanitizedData);
  } else {
    return {
      success: false,
      reason: 'Invalid submission type',
      validationErrors: { type: 'Invalid submission type' }
    };
  }

  // Check validation
  if (!validation.isValid) {
    return {
      success: false,
      reason: 'Validation failed',
      validationErrors: validation.errors
    };
  }

  if (!HUBSPOT_API_KEY) {
    logger.info(`HubSpot not configured - ${type} request logged only`);
    return {
      success: false,
      reason: 'HubSpot not configured',
      hubspotConfigured: false,
      data: sanitizedData // Return sanitized data even if HubSpot is not configured
    };
  }

  try {
    // Prepare contact properties based on type
    const contactProperties = prepareContactProperties(sanitizedData, type);
    
    // Create contact in HubSpot
    const contactData = {
      properties: contactProperties
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

    let contactResult = null;
    if (contactResponse.ok) {
      contactResult = await contactResponse.json();
      logger.info(`${type} contact created in HubSpot`, { id: contactResult.id });
    } else {
      const errorData = await contactResponse.text();
      logger.error(`HubSpot ${type} contact creation failed`, { error: errorData });
      return {
        success: false,
        reason: 'HubSpot contact creation failed',
        error: errorData,
        hubspotConfigured: true
      };
    }

    // Submit to HubSpot form if configured (optional - requires form permissions)
    let formResult = null;
    if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID) {
      try {
        formResult = await submitToHubspotForm(sanitizedData, type, HUBSPOT_PORTAL_ID, HUBSPOT_FORM_ID);
      } catch (error) {
        logger.warn(`HubSpot form submission skipped - form permissions not available`, { error: error.message });
        // Continue without form submission - contact creation still works
      }
    }

    return {
      success: true,
      contactId: contactResult?.id,
      formSubmitted: !!formResult,
      hubspotConfigured: true,
      data: sanitizedData // Return sanitized data for further processing
    };

  } catch (error) {
    logger.error(`HubSpot ${type} integration error`, { error });
    return {
      success: false,
      reason: 'HubSpot integration error',
      error: error.message,
      hubspotConfigured: true,
      data: sanitizedData // Return sanitized data even on error
    };
  }
}

/**
 * Prepare contact properties for HubSpot based on submission type
 * Maps camelCase fields to HubSpot's snake_case format
 * @param {Object} data - Contact data
 * @param {string} type - Type of submission
 * @returns {Object} - HubSpot contact properties
 */
function prepareContactProperties(data, type) {
  const baseProperties = {
    hs_lead_status: 'NEW',
    lifecyclestage: 'lead'
  };

  if (type === 'contact') {
    return {
      ...baseProperties,
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      jobtitle: data.jobTitle || '',
      message: data.message,
      solution_interest: data.solutionInterest || 'general'
    };
  } else if (type === 'demo') {
    return {
      ...baseProperties,
      firstname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phone: data.phone || '',
      company: data.company || '',
      jobtitle: data.jobTitle || '',
      message: data.message || ''
    };
  }

  return baseProperties;
}

/**
 * Submit data to HubSpot form
 * Maps camelCase fields to HubSpot's expected format
 * @param {Object} data - Form data
 * @param {string} type - Type of submission
 * @param {string} portalId - HubSpot portal ID
 * @param {string} formId - HubSpot form ID
 * @returns {Promise<boolean>} - Success status
 */
async function submitToHubspotForm(data, type, portalId, formId) {
  try {
    const formData = new URLSearchParams();
    
    if (type === 'contact') {
      formData.append('firstname', data.firstName);
      formData.append('lastname', data.lastName);
      formData.append('email', data.email);
      if (data.phone) formData.append('phone', data.phone);
      if (data.company) formData.append('company', data.company);
      if (data.jobTitle) formData.append('jobtitle', data.jobTitle);
      formData.append('message', data.message);
      if (data.solutionInterest) formData.append('solution_interest', data.solutionInterest);
    } else if (type === 'demo') {
      formData.append('firstname', data.firstName);
      formData.append('lastname', data.lastName);
      formData.append('email', data.email);
      if (data.phone) formData.append('phone', data.phone);
      if (data.company) formData.append('company', data.company);
      if (data.jobTitle) formData.append('jobtitle', data.jobTitle);
      if (data.message) formData.append('message', data.message);
    }

    const formResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      }
    );

    if (!formResponse.ok) {
      logger.warn(`HubSpot ${type} form submission failed, but contact was created`);
      return false;
    }

    return true;
  } catch (error) {
    logger.error(`HubSpot ${type} form submission error`, { error });
    return false;
  }
}

/**
 * Send notification email for form submissions
 * @param {Object} data - Form data
 * @param {string} type - Type of submission
 * @param {Object} additionalData - Additional data to include
 * @returns {Promise<boolean>} - Success status
 */
export async function sendNotificationEmail(data, type, additionalData = {}) {
  if (!process.env.NOTIFICATION_EMAIL) {
    return false;
  }

  try {
    // Get site configuration for dynamic branding
    const siteConfig = getSiteConfig('gnymble');
    const siteName = siteConfig?.name || 'Gnymble';
    
    const subject = type === 'contact' 
      ? `New Contact Form Submission - ${siteName}`
      : `New Demo Request - ${siteName}`;

    const emailData = {
      to: process.env.NOTIFICATION_EMAIL,
      subject,
      data: {
        name: type === 'contact' 
          ? `${data.firstName} ${data.lastName}`
          : `${data.firstName} ${data.lastName}`,
        email: data.email,
        company: data.company,
        ...additionalData
      }
    };

    await fetch('/api/send-notification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    return true;
  } catch (error) {
    logger.warn(`Failed to send ${type} notification email`, { error });
    return false;
  }
} 