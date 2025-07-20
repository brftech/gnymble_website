import React from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleAbout() {
  const config = getSiteConfig("gnymble");

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
            About Gnymble
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Built for compliance. Designed for bold brands. Gnymble delivers precision SMS solutions where every word matters.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Gnymble was founded with a simple mission: to provide enterprise-grade SMS solutions for industries where compliance, security, and brand control are non-negotiable.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We understand that in regulated industries, every message carries weight. That's why we've built a platform that combines cutting-edge technology with unwavering commitment to compliance and security.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
              <h3 className="text-2xl font-black mb-6 text-white">Why Gnymble?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Built specifically for regulated industries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">SOC 2 Type II certified security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Multi-level approval workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Complete audit trails and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-300">Dedicated compliance support</span>
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
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
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
          <p className="text-xl text-gray-300 mb-12">
            Gnymble is powered by a team of experts in compliance, security, and enterprise technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
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
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
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
              <div className="text-4xl font-black text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">SOC 2</div>
              <div className="text-gray-300">Certified</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-600 mb-2">100+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <h2 className="text-4xl font-black mb-6">Ready to Experience Gnymble?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join leading regulated industries using Gnymble for secure, compliant messaging.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
        >
          Contact Sales Team
        </a>
      </section>
    </PercyTechLayout>
  );
} 