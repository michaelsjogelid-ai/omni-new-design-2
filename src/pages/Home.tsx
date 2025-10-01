import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WorksSection from '../components/WorksSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={homeRef} className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </div>
  );
};

export default Home;