import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  as?: keyof JSX.IntrinsicElements;
  splitBy?: 'word' | 'character' | 'line';
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  style = {},
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  direction = 'up',
  as: Component = 'div',
  splitBy = 'word'
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true 
  });
  const controls = useAnimation();

  // Split text based on splitBy prop
  const splitText = () => {
    if (splitBy === 'character') {
      return text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
              x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
              filter: 'blur(5px)'
            },
            visible: { 
              opacity: 1, 
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              transition: {
                duration: duration,
                delay: delay + (index * stagger),
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    } else if (splitBy === 'word') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
              x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
              filter: 'blur(8px)'
            },
            visible: { 
              opacity: 1, 
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              transition: {
                duration: duration,
                delay: delay + (index * stagger),
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ));
    } else {
      // Split by line (using <br> tags)
      return text.split('\n').map((line, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { 
              opacity: 0, 
              y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
              x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
              filter: 'blur(10px)'
            },
            visible: { 
              opacity: 1, 
              y: 0,
              x: 0,
              filter: 'blur(0px)',
              transition: {
                duration: duration,
                delay: delay + (index * stagger),
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }
          }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
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

export default TextReveal;
