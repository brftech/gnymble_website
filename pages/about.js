import React from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymbleAbout() {
  const config = getSiteConfig("gnymble");

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
            Our Story
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {config.name} was originally developed for Dr. Fine at Percentric Physicians. Dr. Fine responded to patients' outcry to be able to text (without downloading an app).
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Now, Percentric Physicians delivers medicine in an old-school way: a personal relationship with your doc, on a first name texting basis.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe it's a powerful business communication tool that bridges the gap between traditional communication methods and modern convenience.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
              <h3 className="text-2xl font-black mb-6 text-white">Why {config.name}?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">No app download required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Personal relationship with your provider</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">First name texting basis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Powerful business communication tool</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Built for real-world needs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-black mb-4 text-white">Security First</h3>
              <p className="text-gray-300">
                We believe that security is not a feature—it's the foundation. Every aspect of our platform is built with enterprise-grade security in mind.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-6">📋</div>
              <h3 className="text-2xl font-black mb-4 text-white">Compliance Driven</h3>
              <p className="text-gray-300">
                We understand the regulatory landscape and build our solutions to meet and exceed compliance requirements across industries.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-black mb-4 text-white">Precision Focused</h3>
              <p className="text-gray-300">
                In regulated industries, every word matters. We provide the tools and controls needed for precise, compliant communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center text-white">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
                <h3 className="text-2xl font-black mb-4 text-white">{industry.title}</h3>
                <p className="text-gray-300 mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300">✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 text-white">Our Team</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            {config.name} is powered by a team of experts in compliance, security, and enterprise technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
              <h3 className="text-2xl font-black mb-4 text-white">Compliance Experts</h3>
              <p className="text-gray-300 mb-6">
                Our compliance team includes former regulators and industry experts who understand the complex requirements of regulated industries.
              </p>
              <ul className="text-left space-y-2">
                <li className="text-gray-300">✓ Former FINRA regulators</li>
                <li className="text-gray-300">✓ HIPAA compliance specialists</li>
                <li className="text-gray-300">✓ Legal and regulatory experts</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
              <h3 className="text-2xl font-black mb-4 text-white">Security Engineers</h3>
              <p className="text-gray-300 mb-6">
                Our security team brings decades of experience in enterprise security, encryption, and threat prevention.
              </p>
              <ul className="text-left space-y-2">
                <li className="text-gray-300">✓ SOC 2 Type II certified</li>
                <li className="text-gray-300">✓ End-to-end encryption</li>
                <li className="text-gray-300">✓ 24/7 security monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">SOC 2</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div>
              <div className="text-4xl font-black text-amber-600 mb-2">100+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-amber-700 to-amber-600 text-white">
        <h2 className="text-4xl font-black mb-6">Ready to Experience {config.name}?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join leading regulated industries using {config.name} for secure, compliant messaging.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Contact Sales Team
        </a>
      </section>
    </PercyTechLayout>
  );
} 