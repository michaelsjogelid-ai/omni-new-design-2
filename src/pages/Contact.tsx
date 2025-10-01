import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Ready to automate your business? Let's discuss your project and how we can help you achieve your goals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 focus:outline-none transition-all duration-300"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 focus:outline-none transition-all duration-300"
                  placeholder="your.email@company.com"
                />
              </div>

              {/* Phone Field */}
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 focus:outline-none transition-all duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Message Field */}
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 focus:outline-none transition-all duration-300 resize-vertical"
                  placeholder="Tell us about your automation needs, current challenges, and goals..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black border-2 border-green-400 text-white px-6 py-4 rounded-full font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 hover:transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Business Contact Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-400/20 p-3 rounded-full">
                    <Mail className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">hello@omnisolutions.ai</p>
                    <p className="text-sm text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-400/20 p-3 rounded-full">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-400/20 p-3 rounded-full">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                    <p className="text-sm text-gray-400">Remote-first company</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-green-400" size={24} />
                <h3 className="text-xl font-bold text-white">Quick Response</h3>
              </div>
              <p className="text-gray-300 mb-4">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle size={16} />
                <span className="text-sm font-semibold">Average response time: 4 hours</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">What Happens Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-gray-300 text-sm">We'll review your message and respond within 24 hours</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-gray-300 text-sm">Schedule a free 30-minute consultation call</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-gray-300 text-sm">Receive a custom automation proposal for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="font-semibold text-green-400 mb-2">How long does implementation take?</h3>
              <p className="text-gray-300 text-sm">Most projects are completed within 2-6 weeks, depending on complexity and scope.</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-300 text-sm">Yes, we offer maintenance and optimization services to ensure your automations continue performing optimally.</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">Can you integrate with our existing tools?</h3>
              <p className="text-gray-300 text-sm">Absolutely! We specialize in connecting and automating workflows between your current software and systems.</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-400 mb-2">What's included in the free consultation?</h3>
              <p className="text-gray-300 text-sm">We'll analyze your current processes, identify automation opportunities, and provide a custom proposal with ROI projections.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;