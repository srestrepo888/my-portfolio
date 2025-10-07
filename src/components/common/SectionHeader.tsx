import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TypographyAnimation from './TypographyAnimation';
import TextReveal from './TextReveal';

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
    <div ref={ref} className={`text-center ${className}`} style={{ marginBottom: 'var(--space-header)' }}>
      <TypographyAnimation
        variant="reveal-up"
        delay={0.2}
        duration={0.8}
      >
      {/* Section Number */}
      <TypographyAnimation
        variant="scale-in"
        delay={0.1}
        duration={0.6}
        className="block"
        style={{
          fontSize: 'clamp(3rem, 6vw, 4rem)',
          fontFamily: 'Playfair Display, serif',
          color: '#E5E7EB',
          fontWeight: 100,
          opacity: 0.3,
          marginBottom: 'var(--space-sm)',
          lineHeight: 1
        }}
      >
        {number}
      </TypographyAnimation>
      
      {/* Section Title */}
      <TextReveal
        text={title}
        className="text-heading-1 mb-4"
        direction="up"
        delay={0.3}
        duration={0.8}
        stagger={0.05}
        splitBy="word"
        style={{
          color: '#FF6663',
          fontStyle: 'italic'
        }}
      />
      
      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
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
        <TextReveal
          text={subtitle}
          className="text-body-large"
          direction="up"
          delay={0.6}
          duration={0.8}
          stagger={0.03}
          splitBy="word"
          style={{
            color: '#4A5568',
            maxWidth: '600px',
            margin: '0 auto'
          }}
        />
      )}
      </TypographyAnimation>
    </div>
  );
};

export default SectionHeader;
