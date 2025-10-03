import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: '#FDF6F0' }}
    >
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 px-8 py-8">
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl" style={{ 
            fontFamily: 'Playfair Display, serif',
            color: '#6B7280',
            fontWeight: 300
          }}>
            Silvana
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Home</a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>About</a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Projects</a>
            <a href="#experience" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Experience</a>
            <a href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>Services</a>
            <motion.button 
              className="px-6 py-2.5 text-sm text-white rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: '#4A5568',
                fontFamily: 'Inter, sans-serif'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#2D3748'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen px-8">
        <div className="max-w-screen-xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            {/* Main Title */}
            <h1 className="mb-6">
              <span 
                className="block"
                style={{ 
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  lineHeight: '0.9',
                  color: '#2D3748'
                }}
              >
                Experience
              </span>
              <span 
                className="block"
                style={{ 
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                  lineHeight: '0.9',
                  color: '#F26B75'
                }}
              >
                Architect
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mb-10 mx-auto max-w-2xl" style={{
              fontSize: '18px',
              fontFamily: 'Inter, sans-serif',
              color: '#6B7280',
              lineHeight: '1.6',
              fontWeight: 300
            }}>
              Transforming business vision into human experiences—where strategic design<br />
              meets operational excellence and technology possibility.
            </p>
          
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center"
            >
              <motion.button 
                className="group relative px-12 py-4 font-medium transition-all duration-500 text-white overflow-hidden"
                style={{ 
                  backgroundColor: '#F26B75',
                  borderRadius: '50px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  letterSpacing: '0.3px'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(242, 107, 117, 0.25)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Work Together</span>
                <motion.div 
                  className="absolute inset-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
                    borderRadius: '50px'
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        
          {/* Portfolio Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
          >
            <div className="text-center">
              <div style={{
                fontSize: '36px',
                fontFamily: 'Playfair Display, serif',
                color: '#F26B75',
                fontWeight: 300,
                marginBottom: '4px'
              }}>15+</div>
              <div style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                color: '#6B7280',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>Years Experience</div>
            </div>
            <div className="text-center">
              <div style={{
                fontSize: '36px',
                fontFamily: 'Playfair Display, serif',
                color: '#F26B75',
                fontWeight: 300,
                marginBottom: '4px'
              }}>50+</div>
              <div style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                color: '#6B7280',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>Projects Delivered</div>
            </div>
            <div className="text-center">
              <div style={{
                fontSize: '36px',
                fontFamily: 'Playfair Display, serif',
                color: '#F26B75',
                fontWeight: 300,
                marginBottom: '4px'
              }}>3</div>
              <div style={{
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                color: '#6B7280',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}>Design Awards</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span style={{
            fontSize: '12px',
            fontFamily: 'Inter, sans-serif',
            color: '#9CA3AF',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;