import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ImageOptimizer from '@/components/ui/ImageOptimizer';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Background Image - Faded Portrait */}
      <div className="absolute inset-0">
        <ImageOptimizer
          src="/images/hero-portrait.svg"
          alt="Silvana Restrepo - Experience Architect"
          className="w-full h-full object-cover opacity-20"
          style={{ 
            filter: 'blur(1px)',
            transform: 'scale(1.1)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="font-serif leading-tight mb-8"
          style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
        >
          <span 
            className="block font-bold"
            style={{ 
              background: 'linear-gradient(90deg, #E91E63 0%, #F8BBD9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            EXPERIENCE
          </span>
          <span 
            className="block font-bold"
            style={{ 
              color: '#2D2D2D',
              fontSize: '0.85em'
            }}
          >
            ARCHITECT
          </span>
        </motion.h1>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button 
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px] text-white"
            style={{ 
              backgroundColor: '#E91E63'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 min-h-[44px]"
            style={{ 
              borderColor: '#D4D4D4',
              color: '#2D2D2D',
              backgroundColor: 'transparent'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#E91E63',
              color: 'white',
              borderColor: '#E91E63'
            }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: '#E91E63' }}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;