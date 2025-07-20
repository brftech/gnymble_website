import React, { useState } from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function StripeOnboarding() {
  const config = getSiteConfig("gnymble");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleStripeCheckout = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          platform: 'gnymble',
          customerEmail: '', // Will be collected by Stripe
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/pricing`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;

    } catch (error) {
      console.error('Stripe checkout error:', error);
      setError('Failed to start checkout process. Please try again or contact support.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-20 pb-16 px-6 text-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-700/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-orange-700/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full border border-orange-700/30">
              Secure Onboarding
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
              Start Your {config.name} Journey
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Complete your secure onboarding to begin using {config.name}'s compliance-first texting platform.
          </p>
        </div>
      </section>

      {/* Onboarding Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-600 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-4">Complete Your Setup</h2>
              <p className="text-gray-300">
                You'll be redirected to our secure payment processor to complete your onboarding.
              </p>
            </div>

            {/* Onboarding Plan Summary */}
                          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 mb-8 border border-amber-700/20">
                              <h3 className="text-xl font-bold text-white mb-4">Onboarding Plan - $179</h3>
              <ul className="space-y-3 text-gray-300">
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
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  Text-centered customer support
                </li>
                <li className="flex items-center">
                  <span className="text-amber-600 mr-3 text-lg">✓</span>
                  Compliance monitoring and reporting
                </li>
              </ul>
            </div>

            {/* Stripe Integration Placeholder */}
            <div className="text-center">
              <div className="bg-amber-600/20 border border-amber-600/30 rounded-lg p-6 mb-6">
                <div className="text-amber-400 text-2xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-white mb-2">Secure Payment Processing</h3>
                <p className="text-gray-300 text-sm">
                  Your payment will be processed securely through Stripe. 
                  You'll receive immediate access to your {config.name} account upon completion.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Stripe Checkout Button */}
              <button 
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleStripeCheckout}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Proceed to Secure Checkout'}
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

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Why Trust {config.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">SOC 2 Type II Certified</h3>
              <p className="text-gray-300">
                Enterprise-grade security with end-to-end encryption and comprehensive audit trails.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Hidden Fees</h3>
              <p className="text-gray-300">
                All regulatory SMS fees included. No surprise charges or additional compliance costs.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">
                Trusted by regulated businesses nationwide to maintain compliance while growing customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help you get started with {config.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg text-lg font-black hover:bg-orange-600 hover:text-white transition-all duration-300">
              Contact Support
            </a>
            <a href="/pricing" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-black hover:bg-gray-700 transition-all duration-300">
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 