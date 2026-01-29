import React, { useEffect, useRef, useState } from 'react';

interface ParticleProps {
  density?: number;
  color?: string;
  opacity?: number;
  speed?: number;
}

const ParticlesBackground: React.FC<ParticleProps> = ({ 
  density = 30,
  color = 'rgb(197, 157, 95)', // Golden color
  opacity = 0.5,
  speed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const particleCount = Math.floor(dimensions.width * density / 1000);
    
    const particles: {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
    }[] = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 1;
      const x = Math.random() * (dimensions.width - size * 2);
      const y = Math.random() * (dimensions.height - size * 2);
      const directionX = (Math.random() * 0.4 - 0.2) * speed;
      const directionY = (Math.random() * 0.4 - 0.2) * speed;
      
      particles.push({
        x,
        y,
        directionX,
        directionY,
        size,
        color
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        // Move particles
        p.x += p.directionX;
        p.y += p.directionY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
        
        // Connect particles
        connectParticles(p, particles, ctx);
      }
    };
    
    const connectParticles = (p: { x: number; y: number; directionX: number; directionY: number; size: number; color: string }, particlesList: { x: number; y: number; directionX: number; directionY: number; size: number; color: string }[], ctx: CanvasRenderingContext2D) => {
      const proximityLimit = 150;
      
      for (let j = 0; j < particlesList.length; j++) {
        const p2 = particlesList[j];
        
        // Calculate distance between particles
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < proximityLimit) {
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.globalAlpha = (proximityLimit - distance) / proximityLimit * opacity / 2;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };
    
    animate();
  }, [dimensions, density, color, opacity, speed]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default ParticlesBackground;