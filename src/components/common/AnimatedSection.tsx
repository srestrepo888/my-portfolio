import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Variants = {
  [key: string]: any;
};

type Transition = {
  duration?: number;
  delay?: number;
  ease?: number[] | string;
  staggerChildren?: number;
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale' | 'custom';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  customVariants?: Variants;
  customTransition?: Transition;
  stagger?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  style,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true,
  customVariants,
  customTransition,
  stagger = 0,
  id
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold 
  });

  const defaultVariants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const variants = customVariants || (animation !== 'custom' ? defaultVariants[animation] : {});

  const transition = customTransition || {
    duration,
    delay,
    ease: [0.4, 0, 0.2, 1],
    staggerChildren: stagger
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={transition}
    >
      {stagger > 0 ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{
              duration: duration * 0.8,
              delay: delay + (index * stagger),
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.section>
  );
};

export default AnimatedSection;