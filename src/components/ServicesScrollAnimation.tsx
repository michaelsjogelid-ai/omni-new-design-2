import React, { useEffect } from 'react';

const ServicesScrollAnimation: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const expectedResults = document.getElementById('expected-results');
      const howWeWork = document.getElementById('how-we-work');
      
      if (!expectedResults || !howWeWork) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Get the position of the expected results section
      const expectedResultsRect = expectedResults.getBoundingClientRect();
      const expectedResultsTop = expectedResultsRect.top + scrollY;
      const expectedResultsHeight = expectedResultsRect.height;
      
      // Start animation very late - when Expected Results is already 60% up the page
      const animationStartPosition = expectedResultsTop - (windowHeight * 0.4); // Start when 60% up
      // Complete overlap when Expected Results is 70% up the page
      const targetScrollPosition = expectedResultsTop - (windowHeight * 0.3); // 70% up means 30% from top
      
      // Calculate scroll progress from animation start to 70% position
      const animationDistance = targetScrollPosition - animationStartPosition;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - animationStartPosition) / animationDistance));
      
      // Calculate complete overlap - use more than the full height for complete coverage
      const completeOverlapAmount = expectedResultsHeight + 150; // Extra 150px for complete coverage
      const overlapAmount = scrollProgress * completeOverlapAmount;
      
      // Transform the "How We Work" section to overlap
      howWeWork.style.transform = `translateY(-${overlapAmount}px)`;
      
      // Move the consultation button to follow behind the overlapped section
      const consultationButton = document.querySelector('.consultation-follow');
      if (consultationButton) {
        const buttonOffset = Math.min(overlapAmount * 0.8, expectedResultsHeight + 50); // Follow 80% of the overlap
        (consultationButton as HTMLElement).style.transform = `translateY(-${buttonOffset}px)`;
      }
      
      // Fade out Expected Results as How We Work overlaps
      const opacity = Math.max(0.1, 1 - (scrollProgress * 0.9));
      expectedResults.style.opacity = opacity.toString();
      
      // Enhance the backdrop effect during overlap
      const blurAmount = scrollProgress * 10;
      howWeWork.style.backdropFilter = `blur(${10 + blurAmount}px)`;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial call to set correct positions
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ServicesScrollAnimation;