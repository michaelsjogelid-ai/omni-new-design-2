import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, CheckCircle, ArrowRight, TrendingUp, Target, Clock, Users } from 'lucide-react';

const AiChat: React.FC = () => {
  const features = [
    'Custom-trained AI chatbots for your business',
    '24/7 automated customer support',
    'Multi-language support capabilities',
    'Seamless handoff to human agents',
    'Integration with existing systems',
    'Continuous learning and improvement'
  ];

  const caseStudies = [
    {
      title: 'Community Credit Union',
      description: '24/7 customer support automation handling loan applications and account inquiries',
      results: ['90% query resolution rate', '25K+ members served', '<30sec response time'],
      tech: ['NLP Processing', 'Document Automation', 'CRM Integration']
    },
    {
      title: 'HealthCare Network Plus',
      description: 'Automated patient support and appointment scheduling across 50+ locations',
      results: ['70% reduction in support tickets', '24/7 availability', '95% customer satisfaction'],
      tech: ['Healthcare Compliance', 'Multi-location Integration', 'Appointment Scheduling']
    }
  ];

  const relatedServices = [
    { name: 'Lead Generation & CRM Integration', path: '/services/lead-generation', description: 'Capture and qualify leads through intelligent chat interactions' },
    { name: 'Appointment Setting', path: '/services/appointment-setting', description: 'Let your chatbot handle appointment bookings automatically' },
    { name: 'Website Development', path: '/services/website-development', description: 'Integrate AI chat seamlessly into your website' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageSquare className="text-green-400 animate-bounce-gentle" size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            AI Chat & Customer Support
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deploy intelligent chatbots that provide instant, personalized customer support while learning from every interaction
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our AI Chat & Customer Support service creates intelligent chatbots that understand your business, your customers, and your processes. These aren't generic chatbots – they're custom-trained AI assistants that can handle complex queries, provide personalized responses, and seamlessly integrate with your existing systems.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our chatbots use advanced natural language processing to understand customer intent, provide accurate information, and escalate to human agents when needed. They learn from every interaction, continuously improving their responses and effectiveness.
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
            <p className="text-gray-300">What you can achieve with our AI Chat & Customer Support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">70-90%</div>
              <div className="text-white font-semibold mb-2">Reduction in Support Tickets</div>
              <div className="text-gray-300 text-sm">AI handles routine queries, freeing up your team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Customer Support</div>
              <div className="text-gray-300 text-sm">Never leave customers waiting, even outside business hours</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%+</div>
              <div className="text-white font-semibold mb-2">Customer Satisfaction</div>
              <div className="text-gray-300 text-sm">Instant, accurate responses improve customer experience</div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Deploy Intelligent Customer Support?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our AI Chat & Customer Support service starts at €300–€1,000, depending on complexity and integration requirements.
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

export default AiChat;