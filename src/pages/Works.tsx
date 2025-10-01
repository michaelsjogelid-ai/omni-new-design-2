import React from 'react';
import { ExternalLink, Users, TrendingUp, Clock, Award, Briefcase } from 'lucide-react';
import { LampContainer } from '../components/ui/lamp-colored';
import { motion } from 'framer-motion';

const Works: React.FC = () => {
  const portfolioItems = [
    {
      customerName: 'TechFlow Solutions',
      logo: 'TF',
      website: 'https://techflow-solutions.com',
      project: 'E-commerce Automation Suite',
      description: 'Complete order processing and customer service automation for a major retailer, reducing manual work by 85%.',
      tech: ['AI Chatbots', 'Workflow Automation', 'Data Analytics'],
      results: '85% reduction in manual tasks',
      metrics: [
        { icon: <Users size={16} />, label: 'Users Served', value: '50K+' },
        { icon: <TrendingUp size={16} />, label: 'Efficiency Gain', value: '85%' },
        { icon: <Clock size={16} />, label: 'Time Saved', value: '40hrs/week' }
      ]
    },
    {
      customerName: 'HealthCare Network Plus',
      logo: 'HN',
      website: 'https://healthcare-network.com',
      project: 'Healthcare Data Pipeline',
      description: 'Automated patient data processing and reporting system for a healthcare network with 50+ locations.',
      tech: ['Data Processing', 'API Integration', 'Compliance Automation'],
      results: '70% faster reporting',
      metrics: [
        { icon: <Users size={16} />, label: 'Locations', value: '50+' },
        { icon: <TrendingUp size={16} />, label: 'Speed Increase', value: '70%' },
        { icon: <Clock size={16} />, label: 'Processing Time', value: '2hrs vs 8hrs' }
      ]
    },
    {
      customerName: 'Community Credit Union',
      logo: 'CC',
      website: 'https://community-credit.com',
      project: 'Financial Services Bot',
      description: '24/7 customer support automation handling loan applications and account inquiries for a credit union.',
      tech: ['NLP Processing', 'Document Automation', 'CRM Integration'],
      results: '90% query resolution',
      metrics: [
        { icon: <Users size={16} />, label: 'Members Served', value: '25K+' },
        { icon: <TrendingUp size={16} />, label: 'Resolution Rate', value: '90%' },
        { icon: <Clock size={16} />, label: 'Response Time', value: '<30sec' }
      ]
    },
    {
      customerName: 'Global Logistics Corp',
      logo: 'GL',
      website: 'https://global-logistics.com',
      project: 'Supply Chain Automation',
      description: 'End-to-end supply chain automation including inventory management, order tracking, and vendor communications.',
      tech: ['IoT Integration', 'Predictive Analytics', 'Automated Reporting'],
      results: '60% cost reduction',
      metrics: [
        { icon: <Users size={16} />, label: 'Warehouses', value: '15' },
        { icon: <TrendingUp size={16} />, label: 'Cost Savings', value: '60%' },
        { icon: <Clock size={16} />, label: 'Order Processing', value: '24/7' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Cyan Lamp Effect (same as website page) */}
      <LampContainer className="bg-black w-full min-h-screen" lampColor="cyan">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Briefcase className="text-cyan-400 animate-bounce-gentle" size={48} />
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
          Our Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 text-center text-xl text-gray-300 max-w-3xl px-4"
        >
          Real automation solutions delivering measurable results for businesses across industries
        </motion.p>
      </LampContainer>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-green-400/50 hover:transform hover:scale-105 transition-all duration-300 group"
            >
              {/* Customer Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-purple-500 rounded-full flex items-center justify-center text-black font-bold text-lg sm:text-xl">
                    {item.logo}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {item.customerName}
                    </h3>
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      Visit Website
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                <Award className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" size={24} />
              </div>

              {/* Project Info */}
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.project}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs sm:text-sm border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Results */}
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-purple-400" size={16} />
                    <span className="text-purple-400 font-semibold text-sm">Key Result:</span>
                  </div>
                  <p className="text-white font-semibold">{item.results}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {item.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="flex items-center justify-center text-green-400 mb-1">
                        {metric.icon}
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">
                        {metric.value}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-400/10 to-purple-500/10 border border-green-400/30 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can automate your business processes and deliver similar results for your company.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-black border-2 border-green-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:border-green-300 hover:shadow-lg hover:shadow-green-400/20 hover:transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;