import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowRight, TrendingUp, Target, Clock, Users } from 'lucide-react';

const AppointmentSetting: React.FC = () => {
  const features = [
    'Smart prospect qualification before booking',
    'Automated calendar management and scheduling',
    'Follow-up and reminder sequences',
    'No-show reduction strategies',
    'Calendar platform integration (Google, Outlook, etc.)',
    'Customizable booking workflows'
  ];

  const caseStudies = [
    {
      title: 'TechFlow Solutions',
      description: 'Automated appointment setting for sales consultations with intelligent prospect qualification',
      results: ['300% more qualified appointments', '60% reduction in no-shows', '40hrs/week time saved'],
      tech: ['AI Qualification', 'Calendar Integration', 'Automated Follow-ups']
    },
    {
      title: 'HealthCare Network Plus',
      description: 'Patient appointment scheduling across 50+ locations with automated confirmations',
      results: ['70% faster booking process', '50+ locations integrated', '95% appointment accuracy'],
      tech: ['Multi-location Scheduling', 'Patient Management', 'Automated Confirmations']
    }
  ];

  const relatedServices = [
    { name: 'Lead Generation & CRM Integration', path: '/services/lead-generation', description: 'Qualify leads before they book appointments' },
    { name: 'AI Chat & Customer Support', path: '/services/ai-chat', description: 'Let AI handle appointment bookings through chat' },
    { name: 'Website Development', path: '/services/website-development', description: 'Embed booking widgets directly into your website' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="text-green-400 animate-bounce-gentle" size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Intelligent Appointment Setting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automate your entire booking process with AI that qualifies prospects and schedules high-value meetings
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our Intelligent Appointment Setting service goes beyond simple calendar booking. We create smart systems that qualify prospects, understand their needs, and automatically schedule the right type of meeting with the right person at the optimal time.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Using AI-powered qualification, our system ensures that only high-quality prospects book appointments, reducing wasted time and increasing conversion rates. Automated follow-ups and reminders significantly reduce no-shows while keeping prospects engaged.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-green-400 font-semibold mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-green-400" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-xs border border-green-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Results */}
        <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <Target className="text-green-400 mx-auto mb-4" size={48} />
            <h2 className="text-3xl font-bold text-white mb-4">Expected Results</h2>
            <p className="text-gray-300">What you can achieve with our Intelligent Appointment Setting</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-white font-semibold mb-2">More Qualified Appointments</div>
              <div className="text-gray-300 text-sm">AI qualification ensures higher-quality bookings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-white font-semibold mb-2">Fewer No-Shows</div>
              <div className="text-gray-300 text-sm">Automated reminders and engagement reduce cancellations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">40hrs</div>
              <div className="text-white font-semibold mb-2">Time Saved Per Week</div>
              <div className="text-gray-300 text-sm">Eliminate manual scheduling and follow-up tasks</div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Commonly Combined With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-green-400 group-hover:text-purple-400 transition-colors">
                  <span className="text-sm font-semibold">Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Automate Your Appointment Booking?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Intelligent Appointment Setting service starts at €300–€1,000, depending on your booking complexity and integration needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-black border-2 border-green-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 hover:transform hover:scale-105 transition-all duration-300"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-purple-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-300 hover:shadow-lg hover:shadow-purple-400/20 hover:transform hover:scale-105 transition-all duration-300"
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSetting;