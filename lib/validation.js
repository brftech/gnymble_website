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
  return value && value.length >= min && value.length <= max;
};

export const validateContactForm = (data) => {
  const errors = {};

  // Required fields
  if (!validateRequired(data.firstname)) {
    errors.firstname = 'First name is required';
  }
  if (!validateRequired(data.lastname)) {
    errors.lastname = 'Last name is required';
  }
  if (!validateRequired(data.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!validateRequired(data.message)) {
    errors.message = 'Message is required';
  }

  // Optional fields with validation
  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (data.company && !validateLength(data.company, 1, 100)) {
    errors.company = 'Company name must be between 1 and 100 characters';
  }

  if (data.jobtitle && !validateLength(data.jobtitle, 1, 100)) {
    errors.jobtitle = 'Job title must be between 1 and 100 characters';
  }

  if (data.message && !validateLength(data.message, 10, 2000)) {
    errors.message = 'Message must be between 10 and 2000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const sanitizeContactForm = (data) => {
  return {
    firstname: sanitizeString(data.firstname),
    lastname: sanitizeString(data.lastname),
    email: sanitizeString(data.email).toLowerCase(),
    phone: data.phone ? sanitizeString(data.phone) : '',
    company: data.company ? sanitizeString(data.company) : '',
    jobtitle: data.jobtitle ? sanitizeString(data.jobtitle) : '',
    message: sanitizeString(data.message),
    solution_interest: data.solution_interest ? sanitizeString(data.solution_interest) : 'general'
  };
}; 