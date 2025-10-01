import React from 'react';
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Basic workflow automation',
        'Email support',
        '2 custom integrations',
        'Monthly reporting',
        'Up to 1,000 tasks/month'
      ]
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Advanced automation for growing businesses',
      features: [
        'Advanced AI workflows',
        'Priority support',
        '5 custom integrations',
        'Weekly reporting',
        'Up to 10,000 tasks/month',
        'Custom chatbot development'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited automation',
        'Dedicated account manager',
        'Unlimited integrations',
        'Real-time analytics',
        'Unlimited tasks',
        'White-label solutions',
        'On-premise deployment'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header animate-on-scroll">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="pricing-subtitle">
            Choose the perfect plan to automate your business
          </p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card animate-on-scroll ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header-card">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className="pricing-cta">
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;