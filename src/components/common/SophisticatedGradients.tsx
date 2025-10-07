import React from 'react';
import { motion } from 'framer-motion';

interface SophisticatedGradientsProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'warm' | 'cool' | 'luxury-primary' | 'luxury-sage' | 'luxury-lavender';
  className?: string;
  children?: React.ReactNode;
  animated?: boolean;
  intensity?: 'subtle' | 'medium' | 'strong';
}

const SophisticatedGradients: React.FC<SophisticatedGradientsProps> = ({
  variant = 'primary',
  className = '',
  children,
  animated = false,
  intensity = 'medium'
}) => {
  const gradientClasses = {
    primary: 'gradient-primary',
    secondary: 'gradient-secondary',
    tertiary: 'gradient-tertiary',
    warm: 'gradient-warm',
    cool: 'gradient-cool',
    'luxury-primary': 'gradient-luxury-primary',
    'luxury-sage': 'gradient-luxury-sage',
    'luxury-lavender': 'gradient-luxury-lavender'
  };

  const intensityClasses = {
    subtle: 'opacity-30',
    medium: 'opacity-60',
    strong: 'opacity-90'
  };

  const baseClasses = `${gradientClasses[variant]} ${intensityClasses[intensity]} ${className}`;

  if (animated) {
    return (
      <motion.div
        className={baseClasses}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default SophisticatedGradients;
