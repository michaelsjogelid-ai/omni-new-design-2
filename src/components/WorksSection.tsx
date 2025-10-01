import React from 'react';
import { ExternalLink } from 'lucide-react';

const WorksSection: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Automation Suite',
      description: 'Complete order processing and customer service automation for a major retailer, reducing manual work by 85%.',
      tech: ['AI Chatbots', 'Workflow Automation', 'Data Analytics'],
      results: '85% reduction in manual tasks'
    },
    {
      title: 'Healthcare Data Pipeline',
      description: 'Automated patient data processing and reporting system for a healthcare network with 50+ locations.',
      tech: ['Data Processing', 'API Integration', 'Compliance Automation'],
      results: '70% faster reporting'
    },
    {
      title: 'Financial Services Bot',
      description: '24/7 customer support automation handling loan applications and account inquiries for a credit union.',
      tech: ['NLP Processing', 'Document Automation', 'CRM Integration'],
      results: '90% query resolution'
    }
  ];

  return (
    <section id="works" className="works-section">
      <div className="container">
        <div className="works-header animate-on-scroll">
          <h2 className="section-title">Our Work</h2>
          <p className="works-subtitle">
            Real automation solutions delivering measurable results
          </p>
        </div>
        <div className="works-grid">
          {projects.map((project, index) => (
            <div key={index} className="work-card animate-on-scroll">
              <div className="work-content">
                <h3 className="work-title">{project.title}</h3>
                <p className="work-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="work-results">
                  <span className="results-label">Results:</span>
                  <span className="results-value">{project.results}</span>
                </div>
              </div>
              <div className="work-link">
                <ExternalLink size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;