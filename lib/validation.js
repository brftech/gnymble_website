// Input validation and sanitization utilities

export const sanitizeString = (str) => {
  if (typeof str !== 'string') return '';
  return str.trim().replace(/[<>]/g, '');
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateLength = (value, min = 1, max = 1000) => {
  return value && value.trim().length >= min && value.trim().length <= max;
};

export const validateContactForm = (data) => {
  const errors = {};

  // Required fields - only first name and email
  if (!validateRequired(data.firstName)) {
    errors.firstName = 'First name is required';
  }
  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Optional fields with validation (only if provided)
  if (data.lastName && !validateLength(data.lastName, 1, 100)) {
    errors.lastName = 'Last name must be between 1 and 100 characters';
  }

  if (data.message && !validateLength(data.message, 1, 2000)) {
    errors.message = 'Message must be between 1 and 2000 characters';
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (data.company && !validateLength(data.company, 1, 100)) {
    errors.company = 'Company name must be between 1 and 100 characters';
  }

  if (data.jobTitle && !validateLength(data.jobTitle, 1, 100)) {
    errors.jobTitle = 'Job title must be between 1 and 100 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateDemoForm = (data) => {
  const errors = {};

  // Required fields - only first name and email
  if (!validateRequired(data.firstName)) {
    errors.firstName = 'First name is required';
  }
  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const sanitizeContactForm = (data) => {
  return {
    firstName: sanitizeString(data.firstName),
    lastName: data.lastName ? sanitizeString(data.lastName) : '',
    email: sanitizeString(data.email).toLowerCase(),
    phone: data.phone ? sanitizeString(data.phone) : '',
    company: data.company ? sanitizeString(data.company) : '',
    jobTitle: data.jobTitle ? sanitizeString(data.jobTitle) : '',
    message: data.message ? sanitizeString(data.message) : '',
    solutionInterest: data.solutionInterest ? sanitizeString(data.solutionInterest) : 'general'
  };
};

export const sanitizeDemoForm = (data) => {
  return {
    firstName: sanitizeString(data.firstName),
    lastName: data.lastName ? sanitizeString(data.lastName) : '',
    email: sanitizeString(data.email).toLowerCase(),
    phone: data.phone ? sanitizeString(data.phone) : '',
    company: data.company ? sanitizeString(data.company) : '',
    jobTitle: data.jobTitle ? sanitizeString(data.jobTitle) : '',
    message: data.message ? sanitizeString(data.message) : ''
  };
}; 