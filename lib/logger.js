// Logging utility for consistent logging across the application
class Logger {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  info(message, data = {}) {
    if (this.isDevelopment) {
      console.log(`[INFO] ${message}`, data);
    }
    // In production, you could send to a logging service
  }

  error(message, error = null) {
    if (this.isDevelopment) {
      console.error(`[ERROR] ${message}`, error);
    }
    // In production, send to error tracking service
  }

  warn(message, data = {}) {
    if (this.isDevelopment) {
      console.warn(`[WARN] ${message}`, data);
    }
  }

  debug(message, data = {}) {
    if (this.isDevelopment) {
      console.log(`[DEBUG] ${message}`, data);
    }
  }
}

export const logger = new Logger(); 