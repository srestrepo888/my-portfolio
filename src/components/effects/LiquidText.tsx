import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';

interface LiquidTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

const LiquidText: React.FC<LiquidTextProps> = ({ text, className, style, delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll('.liquid-letter');
    
    gsap.set(letters, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: '50% 50% -50px',
      filter: 'blur(10px)'
    });

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      delay: delay,
      stagger: {
        each: 0.05,
        from: 'start'
      },
      ease: 'power4.out',
      onComplete: () => {
        gsap.to(letters, {
          y: 'random(-2, 2)',
          rotation: 'random(-1, 1)',
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.1,
            from: 'random'
          }
        });
      }
    });

    const handleMouseEnter = (e: Event) => {
      const letter = e.target as HTMLElement;
      gsap.to(letter, {
        scale: 1.2,
        rotation: 'random(-10, 10)',
        duration: 0.3,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    const handleMouseLeave = (e: Event) => {
      const letter = e.target as HTMLElement;
      gsap.to(letter, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    letters.forEach(letter => {
      letter.addEventListener('mouseenter', handleMouseEnter);
      letter.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      letters.forEach(letter => {
        letter.removeEventListener('mouseenter', handleMouseEnter);
        letter.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [delay]);

  return (
    <div ref={containerRef} className={className} style={{ ...style, perspective: '1000px' }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="liquid-letter inline-block cursor-pointer"
          style={{
            display: 'inline-block',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform, opacity, filter'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default LiquidText;