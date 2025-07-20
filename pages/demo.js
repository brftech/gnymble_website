import React, { useState } from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleDemo() {
  const config = getSiteConfig("gnymble");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    useCase: '',
    teamSize: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // TODO: Replace with actual demo request API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        industry: '',
        useCase: '',
        teamSize: '',
        timeline: ''
      });
    } catch (error) {
      // In a real app, you'd want to log this to a service
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Healthcare',
    'Financial Services',
    'Legal Services',
    'Insurance',
    'Real Estate',
    'Manufacturing',
    'Retail',
    'Other'
  ];

  const teamSizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees'
  ];

  const timelines = [
    'Immediate (within 30 days)',
    'Next quarter',
    'Next 6 months',
    'Just exploring options'
  ];

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
            See Gnymble in Action
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Experience how Gnymble transforms SMS communications for regulated industries. 
          Get a personalized demo tailored to your compliance needs.
        </p>
      </section>

      {/* Demo Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
              <h2 className="text-3xl font-black text-white mb-6">Request Your Demo</h2>
              <p className="text-gray-300 mb-8">
                Tell us about your needs and we'll customize a demo just for you.
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                  <p className="text-green-400">Thank you! We've received your demo request. Our team will contact you within 24 hours to schedule your personalized demo.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                  <p className="text-red-400">There was an error submitting your request. Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-300 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-700 focus:outline-none transition-colors"
                  >
                    <option value="">Select your industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-semibold text-gray-300 mb-2">
                    Primary Use Case *
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-amber-700 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your SMS needs and compliance requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-semibold text-gray-300 mb-2">
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-700 focus:outline-none transition-colors"
                    >
                      <option value="">Select team size</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-300 mb-2">
                      Implementation Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-amber-700 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Demo'}
                </button>
              </form>
            </div>

            {/* Demo Benefits */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
                <h3 className="text-2xl font-black text-white mb-6">What to Expect</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-700/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-400 text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Personalized Demo</h4>
                      <p className="text-gray-300 text-sm">See Gnymble configured for your specific industry and compliance needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-700/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-400 text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Compliance Walkthrough</h4>
                      <p className="text-gray-300 text-sm">Learn how our AI compliance engine works for your regulatory requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-700/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-400 text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Integration Demo</h4>
                      <p className="text-gray-300 text-sm">See how Gnymble integrates with your existing tools and workflows.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-700/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-400 text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Q&A Session</h4>
                      <p className="text-gray-300 text-sm">Get answers to your specific questions about implementation and compliance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
                <h3 className="text-2xl font-black text-white mb-6">Demo Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Live platform walkthrough</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Compliance feature demonstration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Integration examples</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Pricing discussion</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Implementation timeline</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-600 mr-3">✓</span>
                    <span className="text-gray-300">Next steps planning</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
                <h3 className="text-2xl font-black text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Can't wait for a demo? Start exploring Gnymble right now with our free trial.
                </p>
                <a
                  href="/signup?platform=gnymble"
                  className="inline-block bg-gradient-to-r from-amber-700 to-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8">Trusted by Regulated Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Healthcare</h3>
              <p className="text-gray-300 text-sm">
                HIPAA-compliant SMS for patient communications and appointment reminders.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">🏦</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Financial Services</h3>
              <p className="text-gray-300 text-sm">
                FINRA-compliant messaging for financial advisors and wealth management.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-amber-700/20">
              <div className="w-12 h-12 bg-amber-700/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-amber-400 text-2xl">⚖️</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Legal Services</h3>
              <p className="text-gray-300 text-sm">
                Secure client communications with full audit trails and compliance monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 