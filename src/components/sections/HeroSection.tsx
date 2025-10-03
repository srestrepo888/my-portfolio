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
      style={{ backgroundColor: '#FDF6F0' }}
    >
      {/* Elegant Background Portrait */}
      <div className="absolute inset-0">
        <ImageOptimizer
          src="/images/hero-portrait.svg"
          alt="Silvana Restrepo - Experience Architect"
          className="w-full h-full object-cover opacity-15"
          style={{ 
            filter: 'blur(3px)',
            transform: 'scale(1.08)'
          }}
        />
      </div>

      {/* Sophisticated Background Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(242, 107, 117, 0.03) 0%, rgba(253, 246, 240, 0.8) 70%, rgba(253, 246, 240, 1) 100%)'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12"
        >
          <h1 
            className="leading-[0.85] tracking-tight"
            style={{ 
              fontSize: 'clamp(4.5rem, 12vw, 9rem)',
              fontFamily: 'Playfair Display, serif',
              fontWeight: 300,
              letterSpacing: '-0.02em'
            }}
          >
            <span 
              className="block mb-2"
              style={{ 
                color: '#F26B75',
                fontSize: '1.4em',
                fontWeight: 400,
                letterSpacing: '-0.03em'
              }}
            >
              EXPERIENCE
            </span>
            <span 
              className="block"
              style={{ 
                color: '#4A5568',
                fontSize: '1em',
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}
            >
              ARCHITECT
            </span>
          </h1>
          
          {/* Ultra-Elegant Saddle Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: mounted ? 1 : 0, scaleX: mounted ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center mt-8"
          >
            <div 
              className="relative"
              style={{ width: '120px', height: '1px' }}
            >
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, #F26B75 20%, #F26B75 80%, transparent 100%)',
                  height: '1px',
                  transform: 'translateY(-50%)'
                }}
              />
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                style={{ 
                  backgroundColor: '#F26B75',
                  boxShadow: '0 0 0 2px #FDF6F0, 0 0 0 3px #F26B75'
                }}
              />
            </div>
          </motion.div>
        </motion.div>
        
        {/* Sophisticated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button 
            className="group relative px-10 py-4 font-medium transition-all duration-500 min-h-[52px] text-white overflow-hidden"
            style={{ 
              backgroundColor: '#F26B75',
              borderRadius: '50px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(242, 107, 117, 0.3)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">View My Work</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ transform: 'translateX(-100%) group-hover:translateX(100%)' }}
            />
          </motion.button>
          
          <motion.button 
            className="group px-10 py-4 font-medium transition-all duration-500 min-h-[52px] relative overflow-hidden"
            style={{ 
              borderColor: '#E2E8F0',
              color: '#4A5568',
              backgroundColor: 'transparent',
              borderRadius: '50px',
              border: '1px solid #E2E8F0',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}
            whileHover={{ 
              scale: 1.02,
              borderColor: '#F26B75',
              color: '#F26B75',
              boxShadow: '0 10px 30px rgba(242, 107, 117, 0.1)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">About Me</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-px h-8"
            style={{ 
              backgroundColor: '#E2E8F0',
              opacity: 0.6
            }}
          />
          <div 
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: '#F26B75' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;