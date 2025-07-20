import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Shared PercyTech theme configuration
export const PercyTechTheme = {
  colors: {
    primary: {
      DEFAULT: '#8B4513',
      dark: '#654321',
      light: '#A0522D'
    },
    secondary: {
      DEFAULT: '#FFFFFF',
      dark: '#F5F5F5',
      light: '#FFFFFF'
    },
    dark: {
      DEFAULT: '#0a0a0a',
      light: '#1a1a1a',
      lighter: '#2a2a2a'
    },
    // Gnymble-specific colors
    gnymble: {
      primary: '#FF6B35', // Orange
      dark: '#E55A2B',
      light: '#FF8A65'
    }
  },
  fonts: {
    hero: 'clamp(3rem, 8vw, 5.5rem)',
    heading: '2.5rem',
    body: '1.125rem'
  },
  animations: {
    float: 'float 6s ease-in-out infinite',
    slideIn: 'slideIn 0.5s ease-out forwards',
    slideInUp: 'slideInUp 0.6s ease-out forwards'
  }
};

// Shared layout wrapper
export const PercyTechLayout = ({ children, siteName = 'PercyTech', siteDescription = 'Smart SMS for Savvy Businesses' }) => {
  const router = useRouter();
  const isGnymble = siteName === 'Gnymble';
  const primaryColor = isGnymble ? 'text-orange-600' : 'text-primary';
  const borderColor = isGnymble ? 'border-orange-600/20' : 'border-primary/20';
  const hoverColor = isGnymble ? 'hover:text-orange-600' : 'hover:text-primary';
  const buttonGradient = isGnymble ? 'from-orange-600 to-orange-500' : 'from-primary to-primary-light';
  const activeColor = isGnymble ? 'text-orange-600' : 'text-primary';
  
  // Function to check if current path matches
  const isActive = (path) => {
    if (router && router.pathname) {
      return router.pathname === path;
    }
    return false;
  };
  
  return (
    <div className="font-sans text-secondary bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {isGnymble ? (
                <span className="text-2xl font-bold text-white">Gnymble</span>
              ) : (
                <span className="text-2xl font-black text-white">
                  {siteName}
                </span>
              )}
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <a 
              href="/" 
              className={`transition-colors ${isActive('/') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Home
            </a>
            <a 
              href="/pricing" 
              className={`transition-colors ${isActive('/pricing') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Pricing
            </a>
            <a 
              href="/about" 
              className={`transition-colors ${isActive('/about') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              About
            </a>
            <a 
              href="/contact" 
              className={`transition-colors ${isActive('/contact') ? `${activeColor} font-semibold` : `text-white ${hoverColor}`}`}
            >
              Contact
            </a>
          </nav>
          <a href="/contact" className={`bg-gradient-to-r ${buttonGradient} text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300`}>
            {isGnymble ? 'Get Started' : 'Get Started'}
          </a>
        </div>
      </header>
      <main className="pt-20">{children}</main>
      <footer className="bg-black/40 backdrop-blur-sm text-secondary text-center py-6 border-t border-orange-800/20">
        <p>&copy; 2025 Percentric Technologies, LLC ({siteName}). All rights reserved.</p>
        {isGnymble && (
          <div className="mt-2 text-sm text-gray-400">
            <p>
              Powered by{' '}
              <a 
                href="https://percytech.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                PercyTech
              </a>
            </p>
            <p className="mt-1">
              <a 
                href="/terms-of-use" 
                className="text-orange-600 hover:text-orange-500 transition-colors"
              >
                Terms of Use
              </a>
            </p>
          </div>
        )}
      </footer>
    </div>
  );
};

// Shared hero section component
export const PercyTechHero = ({ 
  title, 
  subtitle, 
  ctaText = "Request a Demo",
  ctaLink = "/demo",
  siteName = "PercyTech"
}) => {
  const isGnymble = siteName === 'Gnymble';
  const buttonGradient = isGnymble ? 'from-orange-600 to-orange-500' : 'from-primary to-primary-light';
  const titleGradient = isGnymble ? 'from-white to-orange-600' : 'from-white to-primary';
  
  return (
    <section className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h1 className="text-6xl font-black leading-tight">
          <span className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
            {title}
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <a
          href={ctaLink}
          className={`inline-block bg-gradient-to-r ${buttonGradient} text-white px-8 py-4 rounded-lg text-xl font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

// Shared solutions grid component
export const PercyTechSolutions = ({ solutions = [] }) => {
  return (
    <section id="solutions" className="py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 text-secondary">Solutions Built for Your Industry</h2>
        <p className="text-xl text-secondary-dark">Choose the solution that fits your needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((solution, index) => (
          <div key={index} className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-t-4 border-primary shadow-xl">
            <h3 className="text-2xl font-black mb-4 text-secondary">{solution.title}</h3>
            <p className="text-secondary-dark mb-6 leading-relaxed">
              {solution.description}
            </p>
            <a
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary-light transition-colors inline-flex items-center"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}; 