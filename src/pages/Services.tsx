import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import AnimatedHowWeWork from '../components/AnimatedHowWeWork';
import { LampContainer } from '../components/ui/lamp-colored';
import { motion } from 'framer-motion';
import { FeatureCarousel } from '../components/ui/animated-feature-carousel';
import '../styles/animated-how-we-work.css';

const Services: React.FC = () => {

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Green Lamp Effect */}
      <LampContainer className="bg-black w-full min-h-screen" lampColor="green">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="text-green-400 animate-bounce-gentle" size={48} />
        </div>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-green-400 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Our Services
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
          Complete AI automation solutions designed to scale your business and maximize ROI
        </motion.p>
      </LampContainer>

      <div className="container mx-auto px-6 py-16">

        {/* Animated Feature Carousel */}
        <div className="mb-16">
          <FeatureCarousel
            image={{
              step1img1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop",
              step1img2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
              step2img1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1740&auto=format&fit=crop",
              step2img2: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1740&auto=format&fit=crop",
              step3img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop",
              step4img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1740&auto=format&fit=crop",
              alt: "Service features"
            }}
          />
        </div>

        {/* Process Section */}
        <AnimatedHowWeWork />

        {/* Book Consultation Section - Moved to Bottom */}
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

export default Services;