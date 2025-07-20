// TypeScript type definitions for Gnymble application

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  message: string;
  solutionInterest?: string;
}

export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
  useCase: string;
  teamSize?: string;
  timeline?: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
  };
  solutions: Array<{
    title: string;
    description: string;
    link: string;
  }>;
  features?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  industries?: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
  security?: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface Client {
  name: string;
  industry: string;
  logo: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export interface RateLimitConfig {
  windowMs: number;
  max: number;
  message?: string;
  keyGenerator?: (req: any) => string;
}

// Next.js specific types
export interface NextApiRequest extends Request {
  body: any;
  query: Record<string, string | string[]>;
  cookies: Record<string, string>;
  method: string;
  ip?: string;
  connection?: {
    remoteAddress?: string;
  };
}

export interface NextApiResponse extends Response {
  status: (code: number) => NextApiResponse;
  json: (data: any) => NextApiResponse;
  send: (data: any) => NextApiResponse;
}
