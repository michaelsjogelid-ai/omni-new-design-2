import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, ArrowRight, TrendingUp, Target, Monitor, Smartphone } from 'lucide-react';
import { LampContainer } from '../../components/ui/lamp-colored';
import { motion } from 'framer-motion';

const WebsiteDevelopment: React.FC = () => {
  const features = [
    'Mobile-responsive design',
    'Built-in lead capture forms',
    'SEO optimization',
    'Analytics and conversion tracking',
    'Content management system',
    'Fast loading and performance optimized'
  ];

  const caseStudies = [
    {
      title: 'TechFlow Solutions',
      description: 'Complete e-commerce website with integrated automation and lead capture systems',
      results: ['300% increase in conversions', '50K+ users served', '85% mobile traffic'],
      tech: ['React/Next.js', 'Lead Capture Integration', 'Performance Optimization']
    },
    {
      title: 'HealthCare Network Plus',
      description: 'Multi-location healthcare website with appointment booking and patient portals',
      results: ['150% increase in online bookings', '50+ locations', '95% uptime'],
      tech: ['Multi-location Setup', 'Appointment Integration', 'Patient Management']
    }
  ];

  const relatedServices = [
    { name: 'Lead Generation & CRM Integration', path: '/services/lead-generation', description: 'Maximize your website\'s lead capture potential' },
    { name: 'AI Chat & Customer Support', path: '/services/ai-chat', description: 'Add intelligent chat support to your website' },
    { name: 'Appointment Setting', path: '/services/appointment-setting', description: 'Integrate booking systems directly into your site' }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Cyan Lamp Effect */}
      <LampContainer className="bg-black w-full min-h-screen" lampColor="cyan">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Globe className="text-cyan-400 animate-bounce-gentle" size={48} />
        </div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-cyan-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Conversion-Optimized Websites
        </motion.h1>
      </LampContainer>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Detailed Explanation */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">What We Deliver</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our Conversion-Optimized Website Development service creates more than just beautiful websites – we build strategic digital assets designed to convert visitors into customers. Every element is carefully crafted to guide users through your sales funnel and maximize conversions.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We integrate advanced lead capture systems, analytics tracking, and automation tools directly into your website. The result is a powerful marketing machine that works 24/7 to grow your business, with built-in systems to capture, qualify, and nurture leads automatically.
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
            <p className="text-gray-300">What you can achieve with our Conversion-Optimized Websites</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">150-300%</div>
              <div className="text-white font-semibold mb-2">Increase in Conversions</div>
              <div className="text-gray-300 text-sm">Optimized design and user experience drive more actions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Lead Generation</div>
              <div className="text-gray-300 text-sm">Your website works around the clock to capture leads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%+</div>
              <div className="text-white font-semibold mb-2">Mobile Optimization</div>
              <div className="text-gray-300 text-sm">Perfect experience across all devices and screen sizes</div>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Conversion Machine?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our Conversion-Optimized Website Development service starts at €300–€1,000, depending on complexity and features required.
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

export default WebsiteDevelopment;