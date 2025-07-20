import React from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymblePricing() {
  const config = getSiteConfig("gnymble");

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section - Compact */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 pt-16 pb-12 px-6 text-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-700/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="inline-block mb-4">
            <span className="bg-orange-700/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full border border-orange-700/30">
              Simple, Transparent Pricing
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance mb-4">
            <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
              Pricing That Won't Go Up In Smoke
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Everyone starts with our onboarding plan. Then choose the ongoing plan that fits your business needs and compliance requirements.
          </p>
        </div>
      </section>

      {/* Onboarding Section - Compact */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border-2 border-orange-600 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-600/10 rounded-full -translate-y-12 translate-x-12" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-600/10 rounded-full translate-y-8 -translate-x-8" />
            
            <div className="relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Onboarding Plan
                </span>
              </div>
              <div className="pt-8">
                <h2 className="text-3xl font-black text-white mb-4">Start Here</h2>
                <div className="mb-6">
                  <span className="text-5xl font-black text-orange-600">$179</span>
                  <span className="text-xl text-gray-300">/month</span>
                </div>
                <p className="text-lg text-gray-300 mb-6">
                  Perfect for established businesses ready to grow their customer communications with compliance confidence
                </p>
                <ul className="space-y-3 mb-8 text-left max-w-xl mx-auto">
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">All regulatory SMS fees included</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">Complete training and onboarding support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">1 dedicated phone number</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">Up to 500 contacts</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">Up to 1,500 messages per month</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">Text-centered customer support</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-orange-600 mr-3 text-lg">✓</span>
                    <span className="text-base">Compliance monitoring and reporting</span>
                  </li>
                </ul>
                <a href="/stripe-onboarding" className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg text-lg font-black hover:scale-105 hover:shadow-2xl transition-all duration-300 mb-3">
                  Sign Up
                </a>
                <div className="text-sm text-gray-400">
                  All new customers start here • Cancel anytime • 30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Plans Section - Compact */}
      <section className="py-12 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-4">Choose Your Ongoing Plan</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              During onboarding, you'll select the plan that best fits your business needs, messaging volume, and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-orange-600/20 hover:border-orange-600/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-orange-400 text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-white">Starter</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Perfect for small businesses dipping their toes in customer communications.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-black text-orange-600">$79</span>
                <span className="text-base text-gray-300">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  1 dedicated phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 50 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 200 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Text-centered customer support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Basic compliance features
                </li>
              </ul>
              <a href="/stripe-onboarding" className="block w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-2.5 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Sign Up
              </a>
            </div>

            {/* Core Plan - Featured */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border-2 border-orange-600 shadow-xl relative hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-orange-400 text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-white">Core</h3>
              <p className="text-gray-300 mb-4 text-sm">
                For established businesses ready to grow their customer communications.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-black text-orange-600">$179</span>
                <span className="text-base text-gray-300">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  1 dedicated phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 500 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 1,500 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Text-centered customer support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Advanced compliance monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Message approval workflows
                </li>
              </ul>
              <a href="/stripe-onboarding" className="block w-full bg-orange-600 text-white text-center py-2.5 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Sign Up
              </a>
            </div>

            {/* Elite Plan */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-orange-600/20 hover:border-orange-600/40 transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center mb-3">
                <span className="text-orange-400 text-xl">🏆</span>
              </div>
              <h3 className="text-xl font-black mb-3 text-white">Elite</h3>
              <p className="text-gray-300 mb-4 text-sm">
                The perfect blend for businesses with a thriving customer base.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-black text-orange-600">$349</span>
                <span className="text-base text-gray-300">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  1 dedicated or hosted phone number
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 3,000 contacts
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Up to 8,000 messages per month
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Priority text and video support
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Enterprise compliance features
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="text-orange-600 mr-2">✓</span>
                  Custom integrations
                </li>
              </ul>
              <a href="/stripe-onboarding" className="block w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center py-2.5 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - Compact */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-6">Why Choose Gnymble?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <div className="w-10 h-10 bg-orange-700/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-400 text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Compliance First</h3>
              <p className="text-gray-300 text-sm">
                Built-in compliance features for highly regulated industries with automatic regulatory updates.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <div className="w-10 h-10 bg-orange-700/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-400 text-xl">💰</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Hidden Fees</h3>
              <p className="text-gray-300 text-sm">
                All regulatory SMS fees included. No surprise charges or additional compliance costs.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <div className="w-10 h-10 bg-orange-700/20 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-400 text-xl">🎯</span>
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
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">What's included in the $179 onboarding?</h3>
              <p className="text-gray-300 text-sm">The $179/month includes all regulatory SMS fees, complete training, onboarding support, and everything you need to start texting with compliance and confidence.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">Can I change plans later?</h3>
              <p className="text-gray-300 text-sm">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">What about compliance fees?</h3>
              <p className="text-gray-300 text-sm">All regulatory SMS fees are included in your plan price. No hidden charges or surprise compliance costs.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-300 text-sm">No setup fees! Your first month starts at $179 and includes complete onboarding, training, and support.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">What if I exceed my message limit?</h3>
              <p className="text-gray-300 text-sm">We'll notify you before you reach your limit and help you upgrade to the next tier if needed. No overage charges.</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-orange-700/20">
              <h3 className="text-lg font-black text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-300 text-sm">Yes! You can cancel your subscription at any time with no penalties. We also offer a 30-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 px-6 bg-gradient-to-br from-orange-600/10 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Join thousands of regulated businesses that trust Gnymble for their customer communications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/stripe-onboarding" className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg text-lg font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Start Onboarding
            </a>
            <a href="/contact" className="inline-block border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-lg text-lg font-black hover:bg-orange-600 hover:text-white transition-all duration-300">
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 