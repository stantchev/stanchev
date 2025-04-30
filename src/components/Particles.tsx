import React, { useCallback } from 'react';
import { useEffect, useRef } from 'react';

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
  }

  const createParticles = useCallback((canvas: HTMLCanvasElement): Particle[] => {
    const particles: Particle[] = [];
    const count = Math.floor(window.innerWidth / 20); // Responsive particle count
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.3})`,
      });
    }
    
    return particles;
  }, []);

  const animateParticles = useCallback(
    (canvas: HTMLCanvasElement, particles: Particle[]) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Wrap around edges
          if (particle.x > canvas.width) particle.x = 0;
          else if (particle.x < 0) particle.x = canvas.width;
          if (particle.y > canvas.height) particle.y = 0;
          else if (particle.y < 0) particle.y = canvas.height;
          
          // Draw particle
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Connect nearby particles
          connectParticles(particles, particle, ctx, canvas);
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    },
    []
  );

  const connectParticles = (
    particles: Particle[],
    currentParticle: Particle,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    const maxDistance = canvas.width > 768 ? 100 : 70;
    
    particles.forEach((particle) => {
      const dx = currentParticle.x - particle.x;
      const dy = currentParticle.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < maxDistance) {
        const opacity = 1 - distance / maxDistance;
        ctx.strokeStyle = `rgba(150, 150, 255, ${opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(currentParticle.x, currentParticle.y);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create and animate particles
    const particles = createParticles(canvas);
    animateParticles(canvas, particles);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [createParticles, animateParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
};

export default Particles;