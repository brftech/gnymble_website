import React, { useState, useEffect } from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymblePricing() {
  const config = getSiteConfig("gnymble");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        if (response.ok) {
          const data = await response.json();
          if (data.isAuthenticated) {
            setUser(data.user);
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description} user={user}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center relative overflow-hidden">
        {/* Background cigar smoke image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img 
            src="/cigar.png" 
            alt="" 
            className="object-contain opacity-10"
            style={{ width: '400px', height: '300px' }}
          />
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One plan. Everything included. No hidden fees or surprise charges.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
                    {/* Onboarding Plan - Featured at Top */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/20 p-8 rounded-2xl border-2 border-amber-700/40 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">Onboarding Plan</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-4">Onboarding</h3>
                <div className="text-4xl font-black text-amber-400 mb-2">$179</div>
                <div className="text-gray-400">one-time setup</div>
                <p className="text-sm text-gray-400 mt-2">Complete setup, training, and plan selection for your business.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Complete business setup & training
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Plan selection consultation
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Dedicated onboarding specialist
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  First month of chosen plan included
                </li>
              </ul>
              
                              <a href="/signup?platform=gnymble" className="block w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white text-center py-2.5 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>

          {/* Platform Plans - Below Onboarding */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white mb-4">Choose Your Perfect Plan</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              During your onboarding session, we'll help you select the perfect plan for your business needs. 
              Start with onboarding and we'll guide you to the right choice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-4">Starter</h3>
                <div className="text-4xl font-black text-amber-400 mb-2">$79</div>
                <div className="text-gray-400">per month</div>
                <p className="text-sm text-gray-400 mt-2">Perfect for small shops dipping their toes in customer communications.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  1 dedicated phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 50 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 200 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Text-centered customer support
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-400 italic">
                Plan selection during onboarding
              </div>
            </div>

            {/* Core Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-4">Core</h3>
                <div className="text-4xl font-black text-amber-400 mb-2">$179</div>
                <div className="text-gray-400">per month</div>
                <p className="text-sm text-gray-400 mt-2">For established shops ready to grow their customer communications.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  1 dedicated phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 500 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 1,500 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Text-centered customer support
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-400 italic">
                Plan selection during onboarding
              </div>
            </div>

            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-white mb-4">Elite</h3>
                <div className="text-4xl font-black text-amber-400 mb-2">$349</div>
                <div className="text-gray-400">per month</div>
                <p className="text-sm text-gray-400 mt-2">The perfect blend for retailers with a thriving customer base.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  1 dedicated or hosted phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 3,000 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Up to 8,000 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-amber-400 mr-3">✓</span>
                  Priority text and video support
                </li>
              </ul>
              
              <div className="text-center text-sm text-gray-400 italic">
                Plan selection during onboarding
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-700/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">All Plans Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compliance</h3>
              <p className="text-gray-300 text-sm">Built-in regulatory compliance for your industry</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🔒</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Security</h3>
              <p className="text-gray-300 text-sm">Enterprise-grade security and encryption</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Analytics</h3>
              <p className="text-gray-300 text-sm">Detailed reporting and message tracking</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Integrations</h3>
              <p className="text-gray-300 text-sm">Connect with your existing tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - Compact */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-6">Why Choose {config.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <div className="w-10 h-10 bg-amber-800/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-300 text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compliance First</h3>
              <p className="text-gray-300 text-sm">
                Built-in compliance features for highly regulated industries with automatic regulatory updates.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <div className="w-10 h-10 bg-amber-800/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-300 text-xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Hidden Fees</h3>
              <p className="text-gray-300 text-sm">
                All regulatory SMS fees included. No surprise charges or additional compliance costs.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <div className="w-10 h-10 bg-amber-800/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-amber-300 text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300 text-sm">
                Trusted by regulated businesses nationwide to maintain compliance while growing customer engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Compact */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">What's included in the $179 onboarding?</h3>
              <p className="text-gray-300 text-sm">The $179 onboarding includes complete business setup, training, plan selection consultation, and your first month of the chosen plan. After onboarding, you'll pay the regular plan price.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">Can I change plans later?</h3>
              <p className="text-gray-300 text-sm">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">What about compliance fees?</h3>
              <p className="text-gray-300 text-sm">All regulatory SMS fees are included in your plan price. No hidden charges or surprise compliance costs.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-300 text-sm">The $179 onboarding fee covers complete setup, training, and your first month. After that, you pay the regular plan price ($79, $179, or $349/month).</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">What if I exceed my message limit?</h3>
              <p className="text-gray-300 text-sm">We'll notify you before you reach your limit and help you upgrade to the next tier if needed. No overage charges.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-amber-800/30">
              <h3 className="text-lg font-black text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-300 text-sm">Yes! You can cancel your subscription at any time with no penalties. We also offer a 30-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 px-6 bg-gradient-to-br from-amber-700/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of regulated businesses that trust {config.name} for their customer communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`/signup?platform=${config.name.toLowerCase()}`} className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-3 rounded-lg text-lg font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Sign Up
            </a>
            <a href="/contact" className="inline-block border-2 border-amber-700 text-amber-600 px-6 py-3 rounded-lg text-lg font-black hover:bg-amber-700 hover:text-white transition-all duration-300">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 