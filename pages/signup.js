import React, { useState, useEffect } from 'react';
import { getSiteConfig } from "@percytech/shared";

export default function OnboardingSignup() {
  const [platform, setPlatform] = useState('gnymble');
  const [discountCode, setDiscountCode] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Get platform from URL query parameter
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const platformParam = urlParams.get('platform') || 'gnymble';
      setPlatform(platformParam);
      
      // Get site configuration
      const siteConfig = getSiteConfig(platformParam);
      setConfig(siteConfig);
    }
  }, []);

  const handleStripeCheckout = async () => {
    if (!customerEmail) {
      alert('Please enter your email address');
      return;
    }

    setIsProcessing(true);

    try {
      console.log('Starting checkout process...');
      console.log('Platform:', platform);
      console.log('Email:', customerEmail);
      console.log('Discount Code:', discountCode);

      const requestBody = {
        platform: platform,
        discountCode,
        customerEmail,
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}&platform=${platform}`,
        cancelUrl: `${window.location.origin}/signup?platform=${platform}`
      };

      console.log('Request body:', requestBody);

      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response not ok:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.url) {
        console.log('Redirecting to:', data.url);
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error('No URL in response:', data);
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!config) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-amber-800/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <a className="flex items-center" href="/">
              <span className="text-2xl font-bold text-white">{config.name}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/demo" className="text-white hover:text-amber-400 transition-colors">Demo</a>
            <a href="/contact" className="bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">Contact</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 text-center">
        <div className="relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-amber-700/20 text-amber-400 text-sm font-medium px-3 py-1 rounded-full border border-amber-700/30">
              Onboarding Signup
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
              Welcome to {config.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {config.description}
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <h2 className="text-3xl font-black text-white mb-6">Complete Your Signup</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="discount" className="block text-sm font-semibold text-gray-300 mb-2">
                  Discount Code (Optional)
                </label>
                <input
                  type="text"
                  id="discount"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                  placeholder="Enter discount code if you have one"
                />
              </div>

              <button
                onClick={handleStripeCheckout}
                disabled={isProcessing || !customerEmail}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Processing...' : `Start with ${config.name} - $79/month`}
              </button>
            </div>

            <div className="mt-8 p-6 bg-amber-700/10 border border-amber-700/20 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-4">What's Included:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  Complete onboarding and training
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  All regulatory SMS fees included
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  Dedicated phone number
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 1,500 messages per month
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  Text-centered customer support
                </li>
                <li className="flex items-center">
                  <span className="text-amber-400 mr-3">✓</span>
                  30-day money-back guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Why Choose {config.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Compliance First</h3>
              <p className="text-gray-300 text-sm">
                Built-in compliance features for highly regulated industries with automatic regulatory updates.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">No Hidden Fees</h3>
              <p className="text-gray-300 text-sm">
                All regulatory SMS fees included. No surprise charges or additional compliance costs.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Trusted by regulated businesses nationwide to maintain compliance while growing customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 