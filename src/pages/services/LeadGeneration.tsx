import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, ArrowRight, TrendingUp, Target, Database, Zap } from 'lucide-react';

const LeadGeneration: React.FC = () => {
  const features = [
    'Multi-channel lead capture (website, social media, email)',
    'AI-powered lead qualification and scoring',
    'Automated follow-up sequences',
    'CRM integration and data synchronization',
    'Real-time lead notifications',
    'Advanced analytics and reporting'
  ];

  const caseStudies = [
    {
      title: 'TechFlow Solutions',
      description: 'Increased qualified leads by 400% while reducing manual work by 85%',
      results: ['400% increase in qualified leads', '85% reduction in manual tasks', '50K+ users served'],
      tech: ['AI Chatbots', 'CRM Integration', 'Workflow Automation']
    },
    {
      title: 'Global Logistics Corp',
      description: 'Automated entire lead nurturing process with predictive analytics',
      results: ['300% more qualified appointments', '60% cost reduction', '24/7 automated processing'],
      tech: ['Predictive Analytics', 'Automated Workflows', 'Multi-channel Integration']
    }
  ];

  const relatedServices = [
    { name: 'AI Chat & Customer Support', path: '/services/ai-chat', description: 'Enhance lead qualification with intelligent chatbots' },
    { name: 'Appointment Setting', path: '/services/appointment-setting', description: 'Convert qualified leads into booked meetings' },
    { name: 'Website Development', path: '/services/website-development', description: 'Optimize your website for maximum lead capture' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="text-green-400 animate-bounce-gentle" size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Lead Generation & CRM Integration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your lead generation with intelligent automation that captures, qualifies, and nurtures prospects 24/7
          </p>
        </div>

        {/* Detailed Explanation */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our Lead Generation & CRM Integration service creates a complete automated system that works around the clock to capture, qualify, and nurture your prospects. We build intelligent workflows that identify high-value leads and automatically move them through your sales funnel.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Using advanced AI and machine learning, our system learns from every interaction to continuously improve lead quality and conversion rates. We integrate seamlessly with your existing CRM and sales tools to ensure no lead falls through the cracks.
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
            <p className="text-gray-300">What you can achieve with our Lead Generation & CRM Integration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">200-400%</div>
              <div className="text-white font-semibold mb-2">Increase in Qualified Leads</div>
              <div className="text-gray-300 text-sm">More high-quality prospects entering your sales funnel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-white font-semibold mb-2">Reduction in Manual Work</div>
              <div className="text-gray-300 text-sm">Automated processes handle routine lead management tasks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Lead Capture & Nurturing</div>
              <div className="text-gray-300 text-sm">Never miss a potential customer, even outside business hours</div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Lead Generation & CRM Integration service starts at €800–€2,000, depending on your specific requirements and integrations needed.
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

export default LeadGeneration;