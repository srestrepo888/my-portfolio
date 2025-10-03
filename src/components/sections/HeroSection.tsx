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
      style={{ backgroundColor: '#FFF8F5' }}
    >
      {/* Subtle Background Portrait */}
      <div className="absolute inset-0">
        <ImageOptimizer
          src="/images/hero-portrait.svg"
          alt="Silvana Restrepo - Experience Architect"
          className="w-full h-full object-cover opacity-10"
          style={{ 
            filter: 'blur(2px)',
            transform: 'scale(1.05)'
          }}
        />
      </div>

      {/* Subtle Background Circle */}
      <div 
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 rounded-full opacity-5"
        style={{ 
          background: 'linear-gradient(135deg, #F26B75, #F8BBD9)',
          filter: 'blur(40px)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <h1 
            className="font-serif leading-tight"
            style={{ 
              fontSize: 'clamp(5rem, 15vw, 10rem)',
              fontWeight: 700
            }}
          >
            <span 
              className="block"
              style={{ 
                color: '#F26B75',
                fontSize: '1.3em' // 30% bigger than ARCHITECT
              }}
            >
              EXPERIENCE
            </span>
            <span 
              className="block"
              style={{ 
                color: '#6B7280', // Middle gray
                fontSize: '1em'
              }}
            >
              ARCHITECT
            </span>
          </h1>
          
          {/* Subtle Delicate Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center items-center gap-1 mt-4"
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#F26B75' }}
            />
            <div 
              className="w-2 h-2 rounded-full -ml-1"
              style={{ backgroundColor: '#60A5FA' }}
            />
          </motion.div>
        </motion.div>
        
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
              backgroundColor: '#F26B75'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 min-h-[44px]"
            style={{ 
              borderColor: '#D1D5DB',
              color: '#374151',
              backgroundColor: 'transparent'
            }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: '#F26B75',
              color: 'white',
              borderColor: '#F26B75'
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
          style={{ backgroundColor: '#F26B75' }}
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