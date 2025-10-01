import React, { useEffect, useRef } from 'react';

const GlitchBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // ASCII characters for the pattern
    const chars = '01▓░▒█▄▀■□▪▫';
    const matrix: { char: string; x: number; y: number; opacity: number; color: string; size: number }[] = [];

    // Colors for the glitch effect
    const colors = ['#8000ff', '#00ff00', '#ff0080', '#8000ff', '#0080ff', '#ffffff'];

    // Initialize matrix
    const initMatrix = () => {
      matrix.length = 0;
      const cols = Math.floor(canvas.width / 8);
      const rows = Math.floor(canvas.height / 12);
      
      for (let i = 0; i < 2000; i++) {
        matrix.push({
          char: chars[Math.floor(Math.random() * chars.length)],
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          opacity: Math.random() * 0.8 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 6
        });
      }
    };

    initMatrix();

    let time = 0;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create circular pattern in center
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      matrix.forEach((point, index) => {
        // Calculate distance from center for circular effect
        const dx = point.x - centerX;
        const dy = point.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only render points within the circular area with some variation
        const variation = Math.sin(time * 0.001 + index * 0.1) * 50;
        if (distance < radius + variation && distance > radius * 0.3) {
          ctx.font = `${point.size}px monospace`;
          ctx.fillStyle = `${point.color}${Math.floor(point.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fillText(point.char, point.x, point.y);
          
          // Animate the character
          if (Math.random() < 0.1) {
            point.char = chars[Math.floor(Math.random() * chars.length)];
          }
          
          // Slight movement
          point.x += (Math.random() - 0.5) * 0.5;
          point.y += (Math.random() - 0.5) * 0.5;
          
          // Opacity fluctuation
          point.opacity += (Math.random() - 0.5) * 0.1;
          point.opacity = Math.max(0.1, Math.min(0.8, point.opacity));
        }
      });

      // Add some glitch lines
      if (Math.random() < 0.1) {
        ctx.fillStyle = `rgba(128, 0, 255, 0.1)`;
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 2);
      }

      time++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="glitch-canvas" />;
};

export default GlitchBackground;