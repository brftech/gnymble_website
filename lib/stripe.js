// Stripe utility functions for client-side operations

export const createCheckoutSession = async (data) => {
  try {
    const response = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const formatStripeAmount = (amount) => {
  return (amount / 100).toFixed(2);
};

export const validateStripeEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getStripeErrorMessage = (error) => {
  switch (error.type) {
    case 'card_error':
      return error.message;
    case 'validation_error':
      return 'Please check your input and try again.';
    case 'rate_limit_error':
      return 'Too many requests. Please try again later.';
    case 'invalid_request_error':
      return 'Invalid request. Please try again.';
    case 'authentication_error':
      return 'Authentication failed. Please try again.';
    case 'api_connection_error':
      return 'Network error. Please check your connection and try again.';
    case 'api_error':
      return 'An error occurred. Please try again later.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
}; 