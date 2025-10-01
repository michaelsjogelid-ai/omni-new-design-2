import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Users, Globe, MessageSquare, Calendar, DollarSign } from 'lucide-react';
import { LampContainer } from '../components/ui/lamp-colored';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const services = [
    {
      icon: <Users size={48} />,
      name: 'Lead Generation & CRM Integration',
      price: '€800–€2,000',
      description: 'Complete lead automation system with CRM integration',
      features: [
        'Automated lead capture from multiple channels',
        'Smart lead qualification and scoring',
        'CRM integration and data synchronization',
        'Personalized follow-up sequences',
        'Real-time lead notifications'
      ]
    },
    {
      icon: <Globe size={48} />,
      name: 'Website Development',
      price: '€300–€1,000',
      description: 'Professional websites optimized for conversions',
      features: [
        'Mobile-responsive design',
        'Built-in lead capture forms',
        'SEO optimization',
        'Analytics integration',
        'Content management system'
      ]
    },
    {
      icon: <MessageSquare size={48} />,
      name: 'AI Chat & Customer Support',
      price: '€300–€1,000',
      description: '24/7 intelligent customer support automation',
      features: [
        'Custom-trained AI chatbots',
        '24/7 automated responses',
        'Multi-language support',
        'Human agent handoff',
        'Integration with existing systems'
      ]
    },
    {
      icon: <Calendar size={48} />,
      name: 'Appointment Setting',
      price: '€300–€1,000',
      description: 'Automated booking and scheduling system',
      features: [
        'Smart prospect qualification',
        'Automated calendar management',
        'Follow-up and reminder sequences',
        'No-show reduction strategies',
        'Calendar platform integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Purple Lamp Effect */}
      <LampContainer className="bg-black w-full min-h-screen" lampColor="purple">
        <div className="flex items-center justify-center gap-3 mb-6">
          <DollarSign className="text-purple-400 animate-bounce-gentle" size={48} />
        </div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-purple-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-xl text-gray-300 max-w-3xl"
        >
          Transparent pricing for professional automation solutions
        </motion.p>
      </LampContainer>

      <div className="container mx-auto px-6 py-16">

        {/* Individual Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-6 group-hover:text-cyan-400 transition-all duration-300 animate-bounce-gentle">
                {service.icon}
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-green-400">
                  <span className="text-3xl font-bold text-purple-400">
                    {service.price}
                  </span>
                  </span>
                </div>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-purple-400 font-semibold mb-3">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Combination Services */}
        <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="text-purple-400 animate-spin-slow" size={24} />
              <h3 className="text-2xl font-bold text-purple-400">Combination Services</h3>
              <Star className="text-purple-400 animate-spin-slow" size={24} />
            </div>
            <p className="text-xl text-white mb-2">Contact for details</p>
            <p className="text-gray-300">
              Combine multiple services and save up to 30% on your total investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Starter Package</h4>
              <p className="text-sm text-gray-400">Website + AI Chat</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Growth Package</h4>
              <p className="text-sm text-gray-400">Lead Gen + CRM + Appointments</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Custom Package</h4>
              <p className="text-sm text-gray-400">Tailored to your needs</p>
            </div>
          </div>
        </div>

        {/* Book Consultation Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-black border-2 border-green-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;