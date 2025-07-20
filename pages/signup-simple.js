import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SimpleSignup() {
  const router = useRouter();
  const [platform, setPlatform] = useState('gnymble');
  const [discountCode, setDiscountCode] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.isReady) {
      const platformParam = router.query.platform || 'gnymble';
      setPlatform(platformParam);
      setIsLoading(false);
    }
  }, [router.isReady, router.query.platform]);

  const handleStripeCheckout = async () => {
    if (!customerEmail) {
      alert('Please enter your email address');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: platform,
          discountCode,
          customerEmail,
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}&platform=${platform}`,
          cancelUrl: `${window.location.origin}/signup-simple?platform=${platform}`
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your request. Please try again or contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
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
              <span className="text-2xl font-bold text-white">Gnymble</span>
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance mb-6">
            <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
              Start Your {platform.charAt(0).toUpperCase() + platform.slice(1)} Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete your onboarding signup to begin using {platform.charAt(0).toUpperCase() + platform.slice(1)}'s powerful SMS platform.
          </p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-amber-700 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-amber-700/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Complete Your {platform.charAt(0).toUpperCase() + platform.slice(1)} Onboarding</h2>
              <p className="text-gray-300">
                You'll be redirected to our secure payment processor to complete your onboarding signup.
              </p>
            </div>

            {/* Plan Summary */}
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-amber-700/20">
                              <h3 className="text-xl font-bold text-white mb-4">Onboarding Plan - $179</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  All regulatory SMS fees included
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  Complete training and onboarding support
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  1 dedicated phone number
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  Up to 500 contacts
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  Up to 1,500 messages per month
                </li>
              </ul>
              
              {/* Email Field */}
              <div className="border-t border-gray-700 pt-6 mb-6">
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>

              {/* Discount Code Field */}
              <div className="border-t border-gray-700 pt-6">
                <label htmlFor="discountCode" className="block text-sm font-medium text-gray-300 mb-2">
                  Have a discount code?
                </label>
                <input
                  type="text"
                  id="discountCode"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  placeholder="Enter discount code (optional)"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
                />
              </div>
            </div>

            {/* Checkout Button */}
            <div className="text-center">
              <button 
                className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleStripeCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Proceed to Secure Checkout'}
              </button>

              <div className="text-sm text-gray-400">
                <p>• 30-day money-back guarantee</p>
                <p>• Cancel anytime</p>
                <p>• No setup fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm text-gray-300 py-12 border-t border-amber-800/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2025 Percentric Technologies, LLC (Gnymble). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 