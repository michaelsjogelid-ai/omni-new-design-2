import React, { useState, useEffect, useRef } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
}

const AnimatedHowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const steps: Step[] = [
    {
      number: '1',
      title: 'Discovery & Analysis',
      description: 'We analyze your current processes and identify automation opportunities'
    },
    {
      number: '2',
      title: 'Custom Solution Design',
      description: 'We design and develop tailored automation solutions for your business'
    },
    {
      number: '3',
      title: 'Implementation & Training',
      description: 'We deploy the solutions and train your team for maximum effectiveness'
    },
    {
      number: '4',
      title: 'Optimization & Support',
      description: 'We continuously optimize performance and provide ongoing support'
    }
  ];

  // Start animation when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle animation cycling
  useEffect(() => {
    if (isVisible) {
      // Start immediately with step 0
      setActiveStep(0);
      
      // Set up interval to cycle through steps
      intervalRef.current = setInterval(() => {
        setActiveStep(prevStep => {
          const nextStep = (prevStep + 1) % steps.length;
          console.log(`Animation cycling: Step ${prevStep + 1} → Step ${nextStep + 1}`);
          return nextStep;
        });
      }, 4000); // 4 seconds per step
    } else {
      // Clear interval when not visible
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isVisible, steps.length]);

  const getStepState = (stepIndex: number) => {
    if (stepIndex === activeStep) return 'active';
    if (stepIndex < activeStep) return 'completed';
    return 'inactive';
  };

  return (
    <div 
      ref={sectionRef}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 mb-16"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
        How We Work
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
        {steps.map((step, index) => {
          const state = getStepState(index);
          const isActive = state === 'active';
          const isCompleted = state === 'completed';
          const isInactive = state === 'inactive';
          
          return (
            <div
              key={index}
              className={`
                animated-step-card
                ${isActive ? 'active' : ''}
                ${isCompleted ? 'completed' : ''}
                ${isInactive ? 'inactive' : ''}
              `}
            >
              {/* Progress Bar */}
              <div className="progress-bar-container">
                <div 
                  className={`progress-bar ${isActive ? 'filling' : ''} ${isCompleted ? 'filled' : ''}`}
                  key={`progress-${activeStep}-${index}`}
                />
              </div>
              
              {/* Step Number */}
              <div className="step-number-container">
                <div className="step-number">
                  {step.number}
                </div>
              </div>
              
              {/* Step Content */}
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedHowWeWork;