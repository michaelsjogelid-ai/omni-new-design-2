import React, { useRef, useState, useEffect } from 'react';
import { Users, Calendar, Globe, MessageSquare, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [lastMoveX, setLastMoveX] = useState(0);
  const [moveHistory, setMoveHistory] = useState<Array<{x: number, time: number}>>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Users size={48} />,
      title: 'Lead Generation & CRM Integration',
      description: 'Transform your lead generation with intelligent automation that captures, qualifies, and nurtures prospects 24/7.',
      path: '/services/lead-generation'
    },
    {
      icon: <MessageSquare size={48} />,
      title: 'AI Chat & Customer Support',
      description: 'Deploy intelligent chatbots that provide instant, personalized customer support while learning from every interaction.',
      path: '/services/ai-chat'
    },
    {
      icon: <Calendar size={48} />,
      title: 'Intelligent Appointment Setting',
      description: 'Automate your entire booking process with AI that qualifies prospects and schedules high-value meetings.',
      path: '/services/appointment-setting'
    },
    {
      icon: <Globe size={48} />,
      title: 'Conversion-Optimized Websites',
      description: 'Build high-converting websites and landing pages designed specifically for lead generation and automation.',
      path: '/services/website-development'
    }
  ];

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Calculate how many cards can be visible at once
  const getVisibleCards = () => {
    if (window.innerWidth <= 480) return 1; // Mobile: 1 card
    if (window.innerWidth <= 768) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  // Get maximum index (last possible position)
  const getMaxIndex = () => {
    const visibleCards = getVisibleCards();
    return Math.max(0, services.length - visibleCards);
  };

  // Snap to nearest card
  const snapToCard = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = 350;
    const gap = 32;
    const cardWithGap = cardWidth + gap;
    
    // Calculate which card we're closest to
    const scrollPosition = container.scrollLeft;
    const nearestIndex = Math.round(scrollPosition / cardWithGap);
    const clampedIndex = Math.max(0, Math.min(nearestIndex, getMaxIndex()));
    
    // Snap to that card
    const targetScroll = clampedIndex * cardWithGap;
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentIndex(clampedIndex);
  };

  // Calculate momentum and apply inertial scrolling
  const applyMomentum = () => {
    if (!containerRef.current || moveHistory.length < 2) {
      snapToCard();
      return;
    }

    const container = containerRef.current;
    const now = Date.now();
    
    // Get recent movements (within last 100ms)
    const recentMoves = moveHistory.filter(move => now - move.time < 100);
    
    if (recentMoves.length < 2) {
      snapToCard();
      return;
    }

    // Calculate velocity
    const firstMove = recentMoves[0];
    const lastMove = recentMoves[recentMoves.length - 1];
    const timeDiff = lastMove.time - firstMove.time;
    const distanceDiff = lastMove.x - firstMove.x;
    
    if (timeDiff === 0) {
      snapToCard();
      return;
    }

    const velocity = distanceDiff / timeDiff; // pixels per ms
    
    // Apply momentum only if velocity is significant
    if (Math.abs(velocity) > 0.3) {
      const cardWidth = 350;
      const gap = 32;
      const cardWithGap = cardWidth + gap;
      
      // Calculate momentum distance (reduced for more controlled feel)
      const momentumDistance = velocity * 200; // 200ms of momentum
      const currentScroll = container.scrollLeft;
      const targetScroll = currentScroll - momentumDistance;
      
      // Find the nearest card position after momentum
      const nearestIndex = Math.round(targetScroll / cardWithGap);
      const clampedIndex = Math.max(0, Math.min(nearestIndex, getMaxIndex()));
      const finalScroll = clampedIndex * cardWithGap;
      
      // Smooth scroll to final position
      container.scrollTo({
        left: finalScroll,
        behavior: 'smooth'
      });
      
      setCurrentIndex(clampedIndex);
    } else {
      snapToCard();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartScrollLeft(containerRef.current.scrollLeft);
    setLastMoveX(e.pageX);
    setMoveHistory([{x: e.pageX, time: Date.now()}]);
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2; // Reduced multiplier for smoother feel
    containerRef.current.scrollLeft = startScrollLeft - walk;
    
    // Track movement for momentum calculation
    setLastMoveX(e.pageX);
    setMoveHistory(prev => {
      const newHistory = [...prev, {x: e.pageX, time: Date.now()}];
      // Keep only recent history (last 150ms)
      return newHistory.filter(move => Date.now() - move.time < 150);
    });
  };

  const handleMouseUp = () => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setStartScrollLeft(containerRef.current.scrollLeft);
    setLastMoveX(touch.pageX);
    setMoveHistory([{x: touch.pageX, time: Date.now()}]);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Natural 1:1 movement for touch
    containerRef.current.scrollLeft = startScrollLeft - walk;
    
    // Track movement for momentum calculation
    setLastMoveX(touch.pageX);
    setMoveHistory(prev => {
      const newHistory = [...prev, {x: touch.pageX, time: Date.now()}];
      // Keep only recent history (last 150ms)
      return newHistory.filter(move => Date.now() - move.time < 150);
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Handle scroll end for trackpad scrolling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      // No snapping - just clear timeout for cleanup
      scrollTimeout = setTimeout(() => {
        // Cleanup only, no snapping
      }, 100);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [isDragging]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const maxIndex = getMaxIndex();
      // Adjust current index if it's now out of bounds
      if (currentIndex > maxIndex) {
        const newIndex = maxIndex;
        setCurrentIndex(newIndex);
        if (containerRef.current) {
          const cardWidth = 350;
          const gap = 32;
          const targetScroll = newIndex * (cardWidth + gap);
          containerRef.current.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header animate-on-scroll">
          <h2 className="section-title">Our Services</h2>
          <p className="services-subtitle">
            Complete AI automation solutions designed to scale your business and maximize ROI
          </p>
        </div>
        
        {/* Services Container */}
        <div className="services-carousel-wrapper">
          <div 
            ref={containerRef}
            className="services-container swipeable"
            role="list"
            aria-live="polite"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                role="listitem"
                aria-label={`Service ${index + 1}: ${service.title}`}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <Link to={service.path} className="service-cta">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;