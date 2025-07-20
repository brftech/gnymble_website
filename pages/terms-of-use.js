import React from 'react';
import { PercyTechLayout } from "../shared/components/PercyTechTheme";
import { getSiteConfig } from "../shared/config/PercyTechConfig";

export default function GnymbleTermsOfUse() {
  const config = getSiteConfig("gnymble");

  return (
    <PercyTechLayout siteName={config.name} siteDescription={config.description}>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-6xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-white to-orange-600 bg-clip-text text-transparent">
            Terms of Use
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Please read these terms carefully before using our services.
        </p>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-orange-600/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Gnymble enables landline phone numbers to send and receive SMS and MMS messages and/or provides new phone numbers to send and receive SMS and MMS messages.
              </p>

              <p className="text-gray-300 mb-6">
                Gnymble services are subject to the terms and conditions in this Terms of Use ("Terms" or "Agreement"). "Services" includes our web-based application, any Gnymble Application Program Interfaces ("API") and related tools and technologies.
              </p>

              <p className="text-gray-300 mb-6">
                In this Agreement, "we," "us," "our" or "Gnymble" will refer to Gnymble and, the terms "you," "your" and "Customer" will refer to your business.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Account Creation and Security</h2>
              <p className="text-gray-300 mb-6">
                During the Account creation process, you'll be asked to provide your email address and create a password. You must keep that information accurate and current.
              </p>

              <p className="text-gray-300 mb-6">
                You are solely responsible for all use (whether or not authorized) of our Services under your Account(s), including for the quality and integrity of your Customer Data and each of your applications. You are also solely responsible for all use and for all acts and omissions of anyone that has access to the Services under your Account. You agree to take all reasonable precautions to prevent unauthorized access to or use of our Services and will notify us promptly of any unauthorized access or use at support@gnymble.com.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Compliance with Applicable Law</h2>
              <p className="text-gray-300 mb-6">
                Your access to and use of the Services must be in strict compliance with Applicable Law. "Applicable Law" includes all applicable laws, rules and regulations applicable to you, your business or the subject matter of this Agreement including without limitation, laws governing the use of individual information, deceptive and misleading advertising, electronic commercial communications, telemarketing and other similar laws, which include without limitation the U.S. Telephone Consumer Protection Act of 1991, U.S. Controlling the Assault of Non-Solicited Pornography and Marketing Act of 2003 and the Canada Anti-SPAM Legislation, if applicable, and each as amended.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Subscription Terms</h2>
              <p className="text-gray-300 mb-6">
                You agree to pay the fees generated under your Account.
              </p>

              <p className="text-gray-300 mb-6">
                Payment for all Subscription Service Fees will be automatically charged on the due date. For any change in payment information, please contact Gnymble support. Service will be auto-renewing unless a cancellation is requested in writing. Upon cancellation, you will not have another charge – however, there are no refunds to pro-rate immediate cancellations. You have access to your Gnymble account until the end of the "current" pay-period. All Service Subscription Fees are non-refundable.
              </p>

              <p className="text-gray-300 mb-6">
                Gnymble reserves the right to increase the Service Subscription Fees applicable to any Renewal Term upon at least forty-five (45) days written notice to you.
              </p>

              <p className="text-gray-300 mb-6">
                You must exercise judgment when changing carriers. Porting your voice service from one carrier to another may break the texting route. Gnymble has no control over this so you must check with your carrier prior to porting your number. You will remain responsible for all charges associated with your account notwithstanding a break in the texting route as a result of your change of carriers. You may also contact Gnymble support for any questions regarding this.
              </p>

              <p className="text-gray-300 mb-6">
                Gnymble's Service Subscription Fees are exclusive of any applicable Sales Tax, VAT taxes, and use taxes, utility user's fees, excise taxes, any other business and occupations taxes, 911 taxes, franchise fees and universal service fund fees or taxes and carrier surcharges imposed on or with respect to our Services whether these taxes are imposed directly on you or on Gnymble.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Violations</h2>
              <p className="text-gray-300 mb-6">
                If Gnymble becomes aware of any possible violations by you of the Terms, Gnymble reserves the right to investigate such violations. If, as a result of the investigation, Gnymble believes that criminal activity has occurred, Gnymble reserves the right to refer the matter to, and to cooperate with, any and all applicable legal authorities.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                Gnymble anticipates a network uptime &gt;99.9%. However, there are situations that may be beyond our control that affects message deliverability, including – but not necessarily limited to – third-party gateway downtime by either our provider or the provider of the intended recipient and an out-of-area presence of the intended recipient.
              </p>

              <h2 className="text-2xl font-black text-white mb-4 mt-8">Feedback</h2>
              <p className="text-gray-300 mb-6">
                We welcome and appreciate your feedback on our Services. But please know that by submitting suggestions or other feedback about our Services you agree that submission of any ideas, suggestions, documents, and/or proposals to Gnymble through its suggestion, feedback or similar pages is at your own risk and that Gnymble has no obligations (including without limitation obligations of confidentiality) with respect to such Feedback. You represent and warrant that you have all rights necessary to submit the Feedback. You hereby grant to Gnymble a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of the Company Properties.
              </p>

              <p className="text-gray-300 mb-6">
                We both grant each other the right to use and display each other's name and logo(s) on our respective websites and in other promotional materials solely in connection with each of our respective activities under these Terms.
              </p>

              <div className="mt-8 p-6 bg-orange-600/10 border border-orange-600/20 rounded-lg">
                <p className="text-orange-400 font-semibold">
                  Last updated: January 2025
                </p>
                <p className="text-gray-300 mt-2">
                  For questions about these Terms of Use, please contact us at{' '}
                  <a href="mailto:support@gnymble.com" className="text-orange-600 hover:text-orange-500">
                    support@gnymble.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PercyTechLayout>
  );
} 