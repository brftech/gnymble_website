import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function SuccessPage() {
  const router = useRouter();
  const { session_id, platform = 'gnymble' } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [sessionData, setSessionData] = useState(null);
  const config = getSiteConfig(platform);

  useEffect(() => {
    if (session_id) {
      // In a real app, you'd verify the session with your backend
      // For now, we'll simulate the verification
      setTimeout(() => {
        setSessionData({
          id: session_id,
          amount: 17900, // $179.00
          customer_email: 'customer@example.com',
          platform: platform
        });
        setIsLoading(false);
      }, 1000);
    } else {
      setIsLoading(false);
    }
  }, [session_id, platform]);

  if (isLoading) {
    return (
      <PercyTechLayout siteName={config.name} siteDescription={config.description}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700 mx-auto mb-4"></div>
            <p className="text-gray-300">Verifying your payment...</p>
          </div>
        </div>
      </PercyTechLayout>
    );
  }

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
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
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-green-400 text-3xl">✓</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Welcome to {config.name}!
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your payment was successful and your account is being set up. 
            You'll receive access credentials within the next 24 hours.
          </p>
        </div>
      </section>

      {/* Success Details */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-green-700/20">
            <h2 className="text-2xl font-black text-white mb-6">Payment Confirmed</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Order ID:</span>
                <span className="text-white font-mono">{sessionData?.id || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Amount:</span>
                <span className="text-white font-bold">${(sessionData?.amount / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-300">Platform:</span>
                <span className="text-white">{config.name}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-300">Status:</span>
                <span className="text-green-400 font-bold">✓ Confirmed</span>
              </div>
            </div>

            <div className="bg-green-600/10 border border-green-700/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-white mb-3">What's Next?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">1</span>
                  You'll receive a welcome email within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">2</span>
                  Our team will contact you to schedule onboarding
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">3</span>
                  Your dedicated phone number will be assigned
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">4</span>
                  Complete training and start sending messages
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-white px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">You're in Good Hands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Welcome Email</h3>
              <p className="text-gray-300">
                You'll receive detailed setup instructions and login credentials.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Onboarding Support</h3>
              <p className="text-gray-300">
                Our team will guide you through setup and provide training.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ready to Start</h3>
              <p className="text-gray-300">
                Begin sending compliant SMS messages within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 