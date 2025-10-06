import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  floatSpeed: number;
  floatAmount: number;
}

const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#F26B75', '#FFDAB9', '#4A5568', '#E5E7EB'];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.2 + 0.05,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        floatSpeed: Math.random() * 0.001 + 0.0005,
        floatAmount: Math.random() * 30 + 20
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timeRef.current += 0.01;

      particlesRef.current.forEach((particle, i) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Enhanced mouse interaction with smoother physics
        if (distance < 200) {
          const force = Math.pow((200 - distance) / 200, 2);
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.015;
          particle.vy -= Math.sin(angle) * force * 0.015;
        }

        // Apply organic floating motion
        particle.vx += Math.sin(timeRef.current * particle.floatSpeed) * 0.01;
        particle.vy += Math.cos(timeRef.current * particle.floatSpeed * 1.5) * 0.01;

        // Smooth damping
        particle.vx *= 0.985;
        particle.vy *= 0.985;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Soft boundaries with elastic bounce
        if (particle.x < 0) {
          particle.x = 0;
          particle.vx *= -0.8;
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width;
          particle.vx *= -0.8;
        }
        
        if (particle.y < 0) {
          particle.y = 0;
          particle.vy *= -0.8;
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height;
          particle.vy *= -0.8;
        }

        // Pulsing effect for size and opacity
        particle.pulse += particle.pulseSpeed;
        const pulseFactor = Math.sin(particle.pulse) * 0.3 + 1;
        
        // Create gradient for each particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * pulseFactor * 2
        );
        gradient.addColorStop(0, particle.color + '40');
        gradient.addColorStop(0.5, particle.color + '20');
        gradient.addColorStop(1, 'transparent');

        // Draw particle with gradient
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * pulseFactor;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulseFactor * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * pulseFactor * 1.5;
        ctx.fill();

        // Enhanced connection lines with gradient
        particlesRef.current.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const opacity = Math.pow(1 - distance / 120, 2) * 0.08;
              
              // Create line gradient
              const lineGradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              lineGradient.addColorStop(0, particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
              lineGradient.addColorStop(1, otherParticle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
              
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = lineGradient;
              ctx.globalAlpha = opacity;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        opacity: 0.4,
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleField;