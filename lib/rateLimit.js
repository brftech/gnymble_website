// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitStore = new Map();

export const rateLimit = (options = {}) => {
  const {
    windowMs = 15 * 60 * 1000, // 15 minutes
    max = 100, // limit each IP to 100 requests per windowMs
    message = 'Too many requests from this IP, please try again later.',
    keyGenerator = (req) => req.ip || req.connection.remoteAddress
  } = options;

  return (req, res, next) => {
    const key = keyGenerator(req);
    const now = Date.now();
    const windowStart = now - windowMs;

    // Get existing requests for this IP
    const requests = rateLimitStore.get(key) || [];
    
    // Remove old requests outside the window
    const validRequests = requests.filter(timestamp => timestamp > windowStart);
    
    // Check if limit exceeded
    if (validRequests.length >= max) {
      return res.status(429).json({ 
        error: 'Rate limit exceeded',
        message,
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }
    
    // Add current request
    validRequests.push(now);
    rateLimitStore.set(key, validRequests);
    
    // Clean up old entries (optional, to prevent memory leaks)
    if (rateLimitStore.size > 1000) {
      const oldestKey = rateLimitStore.keys().next().value;
      rateLimitStore.delete(oldestKey);
    }
    
    next();
  };
}; 