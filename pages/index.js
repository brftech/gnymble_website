import React from 'react';
import {
  PercyTechLayout,
  PercyTechSolutions,
} from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleHome() {
  const config = getSiteConfig("gnymble");

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section - Enhanced from cigar.gnymble.com */}
      <section className="relative bg-gradient-to-br from-black to-gray-900 min-h-screen flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-700/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 pt-20 pb-16 md:pt-24 md:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className="bg-orange-700/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full border border-orange-700/30">
                  Precision SMS for Regulated Industries
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance">
                Customer Engagement That Won't Go Up In <span className="text-orange-600">Smoke</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 max-w-xl text-balance">
                Gnymble is the premier business texting solution for regulated industries, 
                helping you maintain perfect compliance while building authentic customer 
                relationships through intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/stripe-onboarding" className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  Sign Up
                </a>
                <a href="/pricing" className="inline-block border border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600/10 transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>

            <div className="relative min-h-[280px] md:min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-orange-600/70 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-[440px] sm:h-[560px] bg-black rounded-[36px] border-[8px] border-gray-800/80 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-6 bg-black flex items-center justify-center">
                    <div className="h-4 w-24 bg-gray-800/90 rounded-b-xl flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-600/60 rounded-full mr-3" />
                      <div className="w-1.5 h-1.5 bg-gray-400/40 rounded-full" />
                    </div>
                  </div>

                  <div className="absolute inset-0 mt-6">
                    <div className="h-full bg-[#111] p-2">
                      <div className="h-12 bg-orange-600 rounded-t-lg flex items-center px-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-white text-xs">CS</span>
                        </div>
                        <div className="ml-3">
                          <div className="h-2.5 w-24 bg-white/90 rounded-full" />
                          <div className="h-2 w-16 bg-white/60 rounded-full mt-1.5" />
                        </div>
                      </div>

                      <div className="bg-[#161616] h-[calc(100%-48px)] rounded-b-lg p-3 overflow-hidden">
                        <div className="flex justify-end mb-4">
                          <div className="bg-orange-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Your compliance review is complete. All messages approved and ready to send! ✅
                            </p>
                            <p className="text-[9px] text-white/70 text-right mt-1">
                              2:34 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          <div className="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Perfect! Can you also check our new product announcements for regulatory compliance?
                            </p>
                            <p className="text-[9px] text-white/70 text-left mt-1">
                              2:36 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end mb-4">
                          <div className="bg-orange-600 text-white rounded-2xl rounded-tr-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Already done! AI flagged 2 items for review. Everything else is compliant and ready to go.
                            </p>
                            <p className="text-[9px] text-white/70 text-right mt-1">
                              2:37 PM
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-4">
                          <div className="bg-gray-800 text-white rounded-2xl rounded-tl-sm p-3 max-w-[80%] shadow-sm">
                            <p className="text-sm">
                              Amazing! This saves us hours of manual review. Thanks Gnymble! 🎯
                            </p>
                            <p className="text-[9px] text-white/70 text-left mt-1">
                              2:38 PM
                            </p>
                          </div>
                        </div>

                        <div className="absolute bottom-3 inset-x-3">
                          <div className="flex items-center bg-gray-900 rounded-full px-4 py-2.5">
                            <div className="h-2 w-32 bg-gray-700 rounded-full" />
                            <div className="ml-auto h-7 w-7 rounded-full bg-orange-600 flex items-center justify-center">
                              <svg
                                className="h-3 w-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-orange-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange-600/40">
              <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center mb-4 border border-orange-700/30">
                <span className="text-orange-400 text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Compliance First
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Built-in compliance features for highly regulated industries with automatic regulatory updates.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-orange-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange-600/40">
              <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center mb-4 border border-orange-700/30">
                <span className="text-orange-400 text-2xl">🔒</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                SOC 2 Type II certified with end-to-end encryption and comprehensive audit trails.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-5 md:p-6 shadow-lg border border-orange-700/20 transform transition-all hover:-translate-y-1 hover:shadow-xl hover:border-orange-600/40">
              <div className="w-12 h-12 bg-orange-700/20 rounded-lg flex items-center justify-center mb-4 border border-orange-700/30">
                <span className="text-orange-400 text-2xl">📋</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Message Approval
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Multi-level approval workflows with compliance officer oversight and automated checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced from cigar.gnymble.com */}
      <section className="py-20 bg-[#1A1F2C]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Tools Built for Regulated Industries
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Gnymble combines intelligent AI texting tools with industry-specific compliance features 
              to help you grow your business while maintaining perfect regulatory adherence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI Compliance Engine</h3>
              <p className="text-gray-300">
                Our intelligent system automatically checks messages against regulatory requirements and flags potential compliance issues.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Compliance Analytics</h3>
              <p className="text-gray-300">
                Track compliance metrics and audit trails with AI-powered insights that help you maintain regulatory standards.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Role-Based Access</h3>
              <p className="text-gray-300">
                Intelligent customer profiles with compliance-aware personalization that respects regulatory boundaries.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Verification</h3>
              <p className="text-gray-300">
                AI-powered age and identity verification that adapts to changing regulations automatically.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Platform</h3>
              <p className="text-gray-300">
                Advanced security with AI monitoring to protect customer data and maintain regulatory compliance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-orange-600/20 hover:border-orange-600/40 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-400 text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Approval Workflows</h3>
              <p className="text-gray-300">
                Multi-level approval processes with compliance officer oversight and automated regulatory checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Industries Section */}
      <section className="py-20 bg-[#221F26] relative">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-orange-700/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-orange-600/20 text-orange-400 text-sm font-medium px-3 py-1 rounded-full">
              Compliance Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
              Trusted by Industries That Demand Precision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              See how regulated industries use Gnymble's compliance-first texting platform to maintain perfect regulatory adherence while building authentic customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="h-20 flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-orange-600/20">
              <div className="text-center">
                <div className="text-3xl mb-2">🏦</div>
                <div className="text-sm font-semibold text-white">Financial Services</div>
              </div>
            </div>
            
            <div className="h-20 flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-orange-600/20">
              <div className="text-center">
                <div className="text-3xl mb-2">💊</div>
                <div className="text-sm font-semibold text-white">Healthcare</div>
              </div>
            </div>
            
            <div className="h-20 flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-orange-600/20">
              <div className="text-center">
                <div className="text-3xl mb-2">🚬</div>
                <div className="text-sm font-semibold text-white">Tobacco Retail</div>
              </div>
            </div>
            
            <div className="h-20 flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-orange-600/20">
              <div className="text-center">
                <div className="text-3xl mb-2">⚖️</div>
                <div className="text-sm font-semibold text-white">Legal Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus - Enhanced */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-transparent to-black/20">
        <h2 className="text-4xl font-black mb-6 text-white">Trusted by Regulated Industries</h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
          Gnymble serves industries where precision, compliance, and brand integrity are paramount.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {config.industries.map((industry, index) => (
            <div key={index} className={`bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border ${index === 1 ? 'border-2 border-orange-600 shadow-xl relative' : 'border-orange-600/20'}`}>
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              )}
              <h3 className="text-2xl font-black mb-4 text-white">{industry.title}</h3>
              <p className="text-gray-300 mb-6">{industry.description}</p>
              <ul className="text-left space-y-2 mb-6">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-300">✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-20 text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <h2 className="text-4xl font-black mb-6">Ready to Ensure Compliance?</h2>
        <p className="text-xl mb-8 opacity-90">
          Start your onboarding today and get everything you need to begin texting with confidence and compliance.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/stripe-onboarding" className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Sign Up
          </a>
          <a href="/pricing" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-xl font-black hover:bg-white hover:text-orange-600 transition-all duration-300">
            View Pricing
          </a>
        </div>
      </section>
    </PercyTechLayout>
  );
} 