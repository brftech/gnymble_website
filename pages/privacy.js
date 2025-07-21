import React from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymblePrivacy() {
  const config = getSiteConfig("gnymble");
  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      <section className="pt-20 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src="/cigar.png" alt="" className="object-contain opacity-10" style={{ width: '400px', height: '300px' }} />
        </div>
        <div className="relative z-10">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-amber-600 bg-clip-text text-transparent">Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">Your privacy and compliance are our top priorities. Please review our policy below.</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-black text-white mb-4 mt-8">Age Restriction & Tobacco Compliance</h2>
              <p className="text-gray-300 mb-6 font-bold">You must be 21 years of age or older to use Gnymble. We do not knowingly collect or store information from anyone under 21. Age verification may be required at any time.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">Information We Collect</h2>
              <p className="text-gray-300 mb-6">We collect information you provide directly, such as your name, phone number, email, and business details. We also collect information about your use of our SMS platform, including message content, delivery status, and opt-in/opt-out activity.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">We use your information to provide and improve our SMS services, ensure compliance with tobacco and age-gating laws, and communicate with you about your account. We do not sell your personal information to third parties.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">SMS Messaging & Consent</h2>
              <p className="text-gray-300 mb-6">By providing your phone number and opting in, you consent to receive SMS and MMS messages from Gnymble and its clients. Message and data rates may apply. You may opt out at any time by replying STOP. For help, reply HELP or contact support@{config.domain}.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">Data Security</h2>
              <p className="text-gray-300 mb-6">We implement industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure. We encourage you to use strong passwords and protect your account information.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">Your Rights & Choices</h2>
              <p className="text-gray-300 mb-6">You may request access to, correction of, or deletion of your personal information by contacting us at support@{config.domain}. You may opt out of SMS at any time by replying STOP.</p>
              <h2 className="text-2xl font-black text-white mb-4 mt-8">Last Updated</h2>
              <p className="text-orange-400 font-semibold mb-2">Last updated: July 2024</p>
              <p className="text-gray-300">For questions about this Privacy Policy, please contact us at <a href={`mailto:support@${config.domain}`} className="text-orange-600 hover:text-orange-500">support@{config.domain}</a></p>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 