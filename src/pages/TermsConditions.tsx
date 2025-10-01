import React from 'react';
import { FileText, Scale, CreditCard, Clock, Shield, Users, AlertTriangle, Gavel } from 'lucide-react';

const TermsConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="text-green-400" size={32} />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Terms & Conditions
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

        {/* Terms & Conditions Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-blue-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">1. Contract Formation</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>1.1.</strong> These Terms & Conditions ("Terms") form a legally binding agreement between Omni Solutions Ltd ("we", "us", "our") and the client ("you", "your").</p>
              <p><strong>1.2.</strong> A contract is formed when you sign our agreement or otherwise confirm acceptance in writing and/or make the required upfront payment.</p>
              <p><strong>1.3.</strong> These Terms override any other terms unless expressly agreed in writing by Omni Solutions Ltd.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-purple-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">2. Services</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>2.1.</strong> We provide AI chatbot development, AI-based services, and website design & development.</p>
              <p><strong>2.2.</strong> Any additional work must be agreed in writing and may require a revised quote and timeline.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-green-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">3. Payments</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>3.1.</strong> All projects require an upfront payment before work begins. The remaining balance is due either in monthly instalments or as stated in your contract.</p>
              <p><strong>3.2.</strong> We accept bank transfers, debit/credit cards, and cryptocurrency.</p>
              <p><strong>3.3.</strong> Time is of the essence — invoices must be paid within the stated terms (usually 7 days).</p>
              <p><strong>3.4.</strong> Late or failed payments:</p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Work will pause immediately until payment is received.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>We may charge statutory interest under the Late Payment of Commercial Debts (Interest) Act 1998 (8% above the Bank of England base rate) plus recovery costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Unpaid invoices may be referred to debt collection or legal action.</span>
                </li>
              </ul>
              <p><strong>3.5.</strong> All payments are non-refundable due to the custom nature of our services.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-cyan-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">4. Delivery & Timelines</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>4.1.</strong> Work starts once the upfront payment clears and we have the information, access, and materials we need.</p>
              <p><strong>4.2.</strong> Most projects complete within 1–2 weeks unless otherwise agreed.</p>
              <p><strong>4.3.</strong> Delays caused by you (late content, approvals, access issues) may extend timelines and will not count as our breach of contract.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-orange-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">5. Cancellations</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>5.1.</strong> You may cancel any time by written notice.</p>
              <p><strong>5.2.</strong> Payments already made are non-refundable.</p>
              <p><strong>5.3.</strong> Any work completed but not yet paid for will become immediately due.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-indigo-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">6. Revisions</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>6.1.</strong> We include reasonable revisions to deliverables until they meet the agreed scope.</p>
              <p><strong>6.2.</strong> Work outside the agreed scope (new features, redesigns, or major changes) will incur additional charges.</p>
              <p><strong>6.3.</strong> Revisions do not mean unlimited redesigns or expansion beyond the signed agreement.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-cyan-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">7. Intellectual Property</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>7.1.</strong> All intellectual property (IP) remains owned by Omni Solutions Ltd until full payment is received.</p>
              <p><strong>7.2.</strong> Once paid in full, ownership of deliverables passes to you (excluding any third-party assets or pre-existing IP).</p>
              <p><strong>7.3.</strong> We may display completed work in our portfolio and marketing materials, unless you request otherwise in writing before the project starts.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-orange-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">8. Client Responsibilities</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>8.1.</strong> You must provide accurate and timely information, content, and approvals.</p>
              <p><strong>8.2.</strong> You are responsible for ensuring any materials you supply (e.g., logos, copy, images) do not infringe third-party rights.</p>
              <p><strong>8.3.</strong> Delays caused by you may lead to timeline extensions and/or extra charges.</p>
            </div>
          </div>

          {/* Section 9 */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-yellow-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">9. Liability & Legal Protection</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>9.1.</strong> We provide our services with reasonable skill and care but do not guarantee specific commercial outcomes, profit, or performance.</p>
              <p><strong>9.2.</strong> To the maximum extent permitted by law:</p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Our total liability for any claim shall not exceed the total fees paid under the contract.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>We are not liable for loss of profit, revenue, business opportunity, indirect or consequential damages, or failures caused by third-party platforms, APIs, hosting, or blockchain networks.</span>
                </li>
              </ul>
              <p><strong>9.3.</strong> Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or other liability which cannot be excluded under English law.</p>
              <p><strong>9.4.</strong> You agree to indemnify and hold harmless Omni Solutions Ltd against any claims, losses, damages, or legal costs resulting from:</p>
              <ul className="ml-6 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Your misuse of our deliverables,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Breach of these Terms,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-2">•</span>
                  <span>Infringement of third-party rights by materials you provided.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 10 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="text-red-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">10. Legal Compliance & Dispute Resolution</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>10.1.</strong> These Terms and any contract are governed by the laws of England and Wales.</p>
              <p><strong>10.2.</strong> The courts of England and Wales shall have exclusive jurisdiction over any dispute.</p>
              <p><strong>10.3.</strong> We comply with the UK Data Protection Act 2018 and the UK GDPR regarding personal data.</p>
              <p><strong>10.4.</strong> If legal action is required to recover unpaid fees or enforce these Terms, you will be responsible for our reasonable legal costs and court fees.</p>
            </div>
          </div>

          {/* Section 11 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-red-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">11. Force Majeure</h2>
            </div>
            <p className="text-gray-300">
              We are not liable for delays or failure to deliver caused by events outside our reasonable control, including but not limited to natural disasters, strikes, cyber-attacks, third-party service outages, or government restrictions.
            </p>
          </div>

          {/* Section 12 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-purple-400" size={24} />
              <h2 className="text-xl sm:text-2xl font-bold text-white">12. Changes to Terms</h2>
            </div>
            <p className="text-gray-300">
              We may update these Terms from time to time. The latest version will apply to any new contract or renewal.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 sm:p-8 mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms & Conditions, please contact us before starting any project.
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

export default TermsConditions;