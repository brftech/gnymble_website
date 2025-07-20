import React, { useState } from 'react';
import { PercyTechLayout } from "@percytech/shared";
import { getSiteConfig } from "@percytech/shared";

export default function GnymbleContact() {
  const config = getSiteConfig("gnymble");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: '',
    solutionInterest: config.name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

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
    setValidationErrors({});

    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          message: '',
          solutionInterest: config.name
        });
      } else {
        console.error('Form submission failed:', responseData);
        setSubmitStatus('error');
        if (responseData.errors) {
          setValidationErrors(responseData.errors);
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-amber-700 bg-clip-text text-transparent">
            Contact Us
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We love texting. We believe it's a powerful business communication tool.
        </p>
      </section>

      {/* Text Us Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
            <h2 className="text-3xl font-black text-white mb-6">Text Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              The fastest way to get in touch with us is through text messaging.
            </p>
            <a 
              href="sms:757-447-0202" 
              className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              TEXT US at 757-447-0202
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-white mb-6">Send us a message</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Have questions about our SMS platform? Want to learn more about how we can help your business? 
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why choose {config.name}?</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Built specifically for regulated industries</li>
                    <li>• HIPAA, FINRA, and SEC compliant</li>
                    <li>• Enterprise-grade security</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Industries we serve</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Healthcare & Pharmaceuticals</li>
                    <li>• Financial Services</li>
                    <li>• Legal & Professional Services</li>
                    <li>• Government & Education</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-amber-700/20">
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
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
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
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-300 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    placeholder="Your job title"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                    placeholder="Tell us about your SMS needs and how we can help..."
                  />
                </div>

                <div>
                  <label htmlFor="solutionInterest" className="block text-sm font-semibold text-gray-300 mb-2">
                    Solution Interest
                  </label>
                  <select
                    id="solutionInterest"
                    name="solutionInterest"
                    value={formData.solutionInterest}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  >
                    <option value={config.name}>{config.name} (Regulated Industries)</option>
                    <option value="PercyMD">PercyMD (Healthcare)</option>
                    <option value="PercyText">PercyText (General Business)</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-900/20 border border-green-700/20 rounded-lg p-4 text-green-400">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">We'll get back to you within 24 hours.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-amber-900/20 border border-amber-700/20 rounded-lg p-4 text-amber-400">
                    <p className="font-semibold">Please fix the following errors:</p>
                    <ul className="mt-2 text-amber-300 text-sm">
                      {Object.entries(validationErrors).map(([field, error]) => (
                        <li key={field}>• {error}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 