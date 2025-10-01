import React from 'react';
import { Shield, Lock, Eye, FileText, Users, Globe, CreditCard, Clock, Mail } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="text-green-400" size={32} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <div className="text-lg text-gray-300 mb-4">
            <strong>Omni Solutions Ltd</strong>
          </div>
          <p className="text-sm text-gray-400">
            Last Updated: {new Date().toLocaleDateString('en-GB', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed">
            Omni Studios Ltd ("we", "us", "our") is committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This Privacy Policy explains how we collect, use, and protect your personal data when you interact with us.
          </p>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-purple-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Information We Collect</h2>
            </div>
            <p className="text-gray-300 mb-4">We may collect and process the following personal information:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Contact details:</strong> name, email address, phone number, company name.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Payment details:</strong> billing address, payment confirmation (we do not store full card details).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Project details:</strong> information you provide about your business, website, or AI requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Technical data:</strong> IP address, browser type, operating system, and usage information when visiting our website.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Communications:</strong> any emails, messages, or project discussions we exchange.</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 italic">We only collect what is necessary to provide our services effectively.</p>
          </div>

          {/* Section 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-blue-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 mb-4">We use your personal data to:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Communicate with you about enquiries, quotes, and projects.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Deliver our services (AI chatbots, websites, and related solutions).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Process payments and maintain financial records.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Improve our website and services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Meet our legal obligations (e.g., accounting, tax compliance).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Protect our business and enforce our Terms & Conditions if required.</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4 font-semibold">We do not sell or rent your personal information to third parties.</p>
          </div>

          {/* Section 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-cyan-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Legal Basis for Processing</h2>
            </div>
            <p className="text-gray-300 mb-4">We process your personal data under the following legal bases:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Contract:</strong> to perform our obligations under the contract we have with you.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Legitimate Interests:</strong> to operate and improve our business where your rights do not override those interests.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Legal Obligation:</strong> to comply with UK tax, accounting, and legal requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Consent:</strong> where you have explicitly agreed (e.g., newsletter sign-ups).</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-green-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">4. Payment Information</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>Payments made by bank transfer or cryptocurrency are handled directly between you and your payment provider.</p>
              <p>For card payments, we use secure third-party payment processors. We do not store your full payment card details.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">5. Sharing Your Information</h2>
            </div>
            <p className="text-gray-300 mb-4">We may share your data with:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Service providers who help us run our business (e.g., hosting, payment processors, IT support).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Legal or regulatory authorities where required by law.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Debt recovery agencies or solicitors if payments are overdue and legal action is required.</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">We ensure all partners who handle your data comply with UK GDPR standards.</p>
          </div>

          {/* Section 6 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-yellow-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">6. Data Security</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>We use appropriate technical and organisational measures to protect your personal data from loss, theft, or unauthorised access.</p>
              <p>However, no transmission over the internet is fully secure, so we cannot guarantee absolute security.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-orange-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">7. Data Retention</h2>
            </div>
            <p className="text-gray-300 mb-4">We keep your data only as long as necessary:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Client and project data:</strong> retained for up to 6 years after the end of our contract (for legal and tax purposes).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span><strong>Emails and enquiries:</strong> up to 2 years unless required longer for legal reasons.</span>
              </li>
            </ul>
            <p className="text-gray-300 mt-4">You may request deletion of non-essential data at any time (see Section 9).</p>
          </div>

          {/* Section 8 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-indigo-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">8. International Transfers</h2>
            </div>
            <p className="text-gray-300">
              If we use service providers outside the UK/EEA, we ensure appropriate safeguards are in place (such as UK-approved Standard Contractual Clauses) to protect your data.
            </p>
          </div>

          {/* Section 9 */}
          <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9. Your Rights</h2>
            <p className="text-gray-300 mb-4">Under the UK GDPR, you have the right to:</p>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Access the personal data we hold about you.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Correct inaccuracies in your data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Request deletion of your data (where legally possible).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Restrict or object to processing of your data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-2">•</span>
                <span>Data portability — request a copy of your data in a usable format.</span>
              </li>
            </ul>
            <div className="bg-white/10 rounded-lg p-4 mt-4">
              <p className="text-white font-semibold mb-2">To exercise these rights, contact us at:</p>
              <a href="mailto:Contactus@omnisolutions.com" className="text-green-400 hover:text-green-300 transition-colors">
                Contactus@omnisolutions.com
              </a>
              <p className="text-gray-300 text-sm mt-2">We may need to verify your identity before responding.</p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-red-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">10. Cookies & Website Tracking</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>Our website may use cookies to improve functionality and analyse traffic.</p>
              <p>You can disable cookies in your browser settings if you prefer.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-purple-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">11. Complaints</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p>If you believe we've mishandled your data, you can contact us first to resolve the issue.</p>
              <p>You also have the right to complain to the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">https://ico.org.uk</a>.</p>
            </div>
          </div>

          {/* Section 12 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-yellow-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">12. Changes to This Policy</h2>
            </div>
            <p className="text-gray-300">
              We may update this Privacy Policy occasionally. The most recent version will always be available on our website.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 sm:p-8 mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Questions About This Policy?</h3>
          <p className="text-gray-300 mb-6">
            If you have any questions about how we handle your personal data, please don't hesitate to contact us.
          </p>
          <a
            href="mailto:Contactus@omnisolutions.com"
            className="inline-flex items-center gap-3 bg-black border-2 border-purple-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-purple-300 hover:shadow-lg hover:shadow-purple-400/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;