import React, { useEffect, useRef } from 'react';

const AboutSection: React.FC = () => {
  const whyOmniRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (whyOmniRef.current) {
      observer.observe(whyOmniRef.current);
    }
    if (howWeWorkRef.current) {
      observer.observe(howWeWorkRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-black py-12 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            ref={whyOmniRef}
            className="animate-from-left rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10"
          >
            <h2 className="text-3xl font-extralight tracking-tight text-white mb-6">
              <span className="text-green-400 font-light">Why Omni</span> Solutions
            </h2>
            <p className="text-base font-light leading-relaxed tracking-tight text-white/75 mb-4">
              At Omni Solutions, we help businesses work smarter, scale faster, and stay competitive in a digital-first world. We specialize in AI chatbots, automation solutions, and custom websites that cut costs, increase efficiency, and drive real growth.
            </p>

            <p className="text-base font-light leading-relaxed tracking-tight text-white/75 mb-4">
              Our team of AI experts and business strategists is dedicated to building solutions that streamline operations and unlock new opportunities for growth.
            </p>

            <p className="text-base font-light leading-relaxed tracking-tight text-white/75">
              What makes us different? We don't just deliver technology — we deliver transformation. Every solution is designed with measurable impact in mind, ensuring your business is equipped to thrive today and in the future. We're not just another tech agency — we're your partner in digital transformation.
            </p>
          </div>

          <div
            ref={howWeWorkRef}
            className="animate-from-right rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 lg:p-10"
          >
            <h3 className="text-2xl font-extralight tracking-tight text-white mb-8">How We Work</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-400 text-black font-light text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-light tracking-tight text-white mb-2">Discovery & Analysis</h4>
                  <p className="text-sm font-light leading-relaxed tracking-tight text-white/70">We analyze your current processes and identify automation opportunities</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-400 text-black font-light text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-light tracking-tight text-white mb-2">Custom Solution Design</h4>
                  <p className="text-sm font-light leading-relaxed tracking-tight text-white/70">We design and develop tailored automation solutions for your business</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-400 text-black font-light text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-light tracking-tight text-white mb-2">Implementation & Training</h4>
                  <p className="text-sm font-light leading-relaxed tracking-tight text-white/70">We deploy the solutions and train your team for maximum effectiveness</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-400 text-black font-light text-sm">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-light tracking-tight text-white mb-2">Optimization & Support</h4>
                  <p className="text-sm font-light leading-relaxed tracking-tight text-white/70">We continuously optimize performance and provide ongoing support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;