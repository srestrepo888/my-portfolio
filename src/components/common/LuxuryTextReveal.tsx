import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface LuxuryTextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  splitBy?: 'word' | 'character' | 'line';
  variant?: 'luxury' | 'elegant' | 'subtle';
}

const LuxuryTextReveal: React.FC<LuxuryTextRevealProps> = ({
  text,
  className = '',
  style = {},
  delay = 0,
  duration = 1.2,
  stagger = 0.08,
  direction = 'up',
  splitBy = 'word',
  variant = 'luxury'
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true 
  });
  const controls = useAnimation();

  // Luxury animation variants
  const getAnimationVariants = () => {
    const baseVariants = {
      luxury: {
        hidden: { 
          opacity: 0, 
          y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
          x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
          filter: 'blur(12px)',
          scale: 0.9
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          scale: 1,
          transition: {
            duration: duration,
            ease: [0.16, 1, 0.3, 1] // Ultra-smooth, luxurious easing
          }
        }
      },
      elegant: {
        hidden: { 
          opacity: 0, 
          y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
          x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
          filter: 'blur(8px)',
          scale: 0.95
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          scale: 1,
          transition: {
            duration: duration,
            ease: [0.19, 1, 0.22, 1] // Sophisticated easing
          }
        }
      },
      subtle: {
        hidden: { 
          opacity: 0, 
          y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
          x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
          filter: 'blur(4px)'
        },
        visible: { 
          opacity: 1, 
          y: 0,
          x: 0,
          filter: 'blur(0px)',
          transition: {
            duration: duration,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }
        }
      }
    };

    return baseVariants[variant];
  };

  const animationVariants = getAnimationVariants();

  // Split text based on splitBy prop
  const splitText = () => {
    if (splitBy === 'character') {
      return text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={animationVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            delay: delay + (index * stagger),
            duration: duration,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ 
            display: 'inline-block',
            transformOrigin: 'center'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    } else if (splitBy === 'word') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={animationVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            delay: delay + (index * stagger),
            duration: duration,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ 
            display: 'inline-block', 
            marginRight: '0.3em',
            transformOrigin: 'center'
          }}
        >
          {word}
        </motion.span>
      ));
    } else {
      // Split by line (using <br> tags)
      return text.split('\n').map((line, index) => (
        <motion.div
          key={index}
          variants={animationVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            delay: delay + (index * stagger),
            duration: duration,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ transformOrigin: 'center' }}
        >
          {line}
        </motion.div>
      ));
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
    >
      {splitText()}
    </motion.div>
  );
};

export default LuxuryTextReveal;
