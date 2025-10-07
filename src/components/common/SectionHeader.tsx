import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  number, 
  title, 
  subtitle, 
  className = "" 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`text-center ${className}`}
      style={{ marginBottom: 'var(--space-header)' }}
    >
      {/* Section Number */}
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="block"
        style={{
          fontSize: 'clamp(3rem, 6vw, 4rem)',
          fontFamily: 'Cormorant Garamond, serif',
          color: '#E5E7EB',
          fontWeight: 100,
          opacity: 0.3,
          marginBottom: 'var(--space-sm)',
          lineHeight: 1
        }}
      >
        {number}
      </motion.span>
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 600,
          fontStyle: 'italic',
          letterSpacing: '0.02em',
          lineHeight: '1.1',
          color: '#FF6663',
          marginBottom: 'var(--space-sm)'
        }}
      >
        {title}
      </motion.h2>
      
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto"
        style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #FF6663, transparent)',
          marginBottom: subtitle ? 'var(--space-sm)' : '0'
        }}
      />
      
      {/* Section Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.01em',
            lineHeight: '1.6',
            color: '#4A5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
