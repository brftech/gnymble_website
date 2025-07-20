// Environment variable validation utility
export const validateEnv = () => {
  const required = [
    'HUBSPOT_API_KEY',
    'HUBSPOT_PORTAL_ID'
  ];
  
  const optional = [
    'HUBSPOT_FORM_ID' // Optional - only needed for form submissions
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
};

export const getEnvVar = (key, defaultValue = '') => {
  return process.env[key] || defaultValue;
}; 