// Environment variable validation utility
export const validateEnv = () => {
  const required = [
    'HUBSPOT_API_KEY',
    'HUBSPOT_PORTAL_ID',
    'HUBSPOT_FORM_ID'
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