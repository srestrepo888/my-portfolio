import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TypographyAnimationProps {
  children: React.ReactNode;
  variant?: 'reveal-up' | 'reveal-down' | 'reveal-left' | 'reveal-right' | 'fade-in' | 'scale-in';
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
  stagger?: boolean;
  staggerDelay?: number;
}

const TypographyAnimation: React.FC<TypographyAnimationProps> = ({
  children,
  variant = 'reveal-up',
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
  as: Component = 'div',
  stagger = false,
  staggerDelay = 0.1
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true 
  });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animation variants
  const animationVariants = {
    'reveal-up': {
      hidden: { 
        opacity: 0, 
        y: 60,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    'reveal-down': {
      hidden: { 
        opacity: 0, 
        y: -60,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    'reveal-left': {
      hidden: { 
        opacity: 0, 
        x: -60,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    'reveal-right': {
      hidden: { 
        opacity: 0, 
        x: 60,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        x: 0,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    'fade-in': {
      hidden: { 
        opacity: 0 
      },
      visible: { 
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    'scale-in': {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        filter: 'blur(5px)'
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start('visible');
      setHasAnimated(true);
    }
  }, [inView, controls, hasAnimated]);

  // For stagger animations, we need to handle multiple children
  if (stagger && Array.isArray(children)) {
    return (
      <div ref={ref} className={className} style={style}>
        {children.map((child, index) => (
          <motion.div
            key={index}
            variants={animationVariants[variant]}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{
              delay: delay + (index * staggerDelay),
              duration: duration,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={animationVariants[variant]}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default TypographyAnimation;
