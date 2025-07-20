import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    jobtitle: '',
    message: '',
    solution_interest: ''
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
      // HubSpot form submission
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          company: '',
          jobtitle: '',
          message: '',
          solution_interest: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-white bg-gradient-to-br from-black to-gray-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-orange-900/20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-2xl font-bold">
            <span className="text-orange-700">Percy</span>
            <span className="text-white">Tech</span>
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="/" className="text-white hover:text-orange-700 transition-colors">Home</a>
            <div className="relative group">
              <span className="text-white hover:text-orange-700 cursor-pointer transition-colors">Solutions</span>
              <div className="absolute left-0 mt-2 bg-black/80 backdrop-blur-md shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 border border-orange-700/20">
                <a href="https://percymd.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyMD</a>
                <a href="https://cigar.gnymble.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">Gnymble</a>
                <a href="https://percytext.com" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-orange-700/10 text-white hover:text-orange-700 transition-colors">PercyText</a>
              </div>
            </div>
            <a href="/pricing" className="text-white hover:text-orange-700 transition-colors">Pricing</a>
            <a href="/about" className="text-white hover:text-orange-700 transition-colors">About</a>
            <a href="/contact" className="text-orange-700 font-semibold">Contact</a>
          </nav>
          <a href="/contact" className="bg-gradient-to-r from-orange-700 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">
            Get Started
          </a>
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 text-center">
          <h1 className="text-6xl font-black leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-orange-700 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your communication? Let's discuss how PercyTech can help your business grow.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-700/20">
                <h2 className="text-3xl font-black text-white mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-900/20 border border-green-700/30 rounded-lg">
                    <p className="text-green-400">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-700/30 rounded-lg">
                    <p className="text-red-400">There was an error sending your message. Please try again or contact us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstname" className="block text-sm font-semibold text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="block text-sm font-semibold text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="jobtitle" className="block text-sm font-semibold text-gray-300 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        id="jobtitle"
                        name="jobtitle"
                        value={formData.jobtitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="solution_interest" className="block text-sm font-semibold text-gray-300 mb-2">
                      Solution Interest
                    </label>
                    <select
                      id="solution_interest"
                      name="solution_interest"
                      value={formData.solution_interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-700 focus:outline-none transition-colors"
                    >
                      <option value="">Select a solution</option>
                      <option value="percymd">PercyMD - Healthcare Solutions</option>
                      <option value="gnymble">Gnymble - Enterprise Solutions</option>
                      <option value="percytext">PercyText - Business Solutions</option>
                      <option value="general">General Inquiry</option>
                    </select>
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
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-orange-700 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your communication needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-700 to-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-white mb-6">Let's Connect</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Whether you're looking to improve patient communication, enhance enterprise security, 
                    or streamline your business messaging, we're here to help you find the perfect solution.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-orange-700 text-2xl">📧</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">info@percytech.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-orange-700 text-2xl">📞</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="text-orange-700 text-2xl">🏢</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                      <p className="text-gray-300">
                        Percentric Technologies, LLC<br />
                        [Your Address]<br />
                        [City, State ZIP]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-orange-700/20">
                  <h3 className="text-xl font-black text-white mb-4">Why Choose PercyTech?</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center">
                      <span className="text-orange-700 mr-3">✓</span>
                      Expert consultation from healthcare professionals
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-700 mr-3">✓</span>
                      Custom solutions for your specific needs
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-700 mr-3">✓</span>
                      Ongoing support and training
                    </li>
                    <li className="flex items-center">
                      <span className="text-orange-700 mr-3">✓</span>
                      Enterprise-grade security and compliance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center bg-gradient-to-r from-orange-700 to-orange-600 text-white">
          <h2 className="text-4xl font-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to discuss your communication needs.
          </p>
          <a href="#contact-form" className="inline-block bg-white text-orange-700 px-8 py-4 rounded-lg text-xl font-black hover:scale-105 hover:shadow-2xl transition-all duration-300">
            Schedule Consultation
          </a>
        </section>
      </main>
      
      <footer className="bg-black/40 backdrop-blur-sm text-white text-center py-6 border-t border-orange-900/20">
        <p>&copy; 2025 Percentric Technologies, LLC. All rights reserved.</p>
      </footer>
    </div>
  );
} 