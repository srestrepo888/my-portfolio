import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="min-h-screen relative overflow-hidden"
    >
      {/* Full-width Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/silvana-portrait.jpg"
          alt="Silvana Restrepo - Experience Architect"
          fill
          priority
          className="object-cover object-center"
          style={{ zIndex: 1 }}
        />
        {/* Light cream overlay with 70-80% opacity */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'rgba(255, 248, 245, 0.75)',
            zIndex: 2
          }}
        />
        {/* Smooth gradient overlay to soften top and bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 248, 245, 0.9) 0%, rgba(255, 248, 245, 0.7) 20%, rgba(255, 248, 245, 0.7) 80%, rgba(255, 248, 245, 0.9) 100%)',
            zIndex: 3
          }}
        />
      </div>
      {/* Sophisticated Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 z-30 px-12 py-10"
      >
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
          {/* Elegant Logo */}
          <motion.div 
            className="text-2xl" 
            style={{ 
              fontFamily: 'Cormorant Garamond, Playfair Display, serif',
              color: '#4A5568',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Silvana
          </motion.div>
          
          {/* Refined Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300" 
               style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Home</a>
            <a href="#about" className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300" 
               style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>About</a>
            <a href="#projects" className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300" 
               style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Projects</a>
            <a href="#experience" className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300" 
               style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Experience</a>
            <a href="#services" className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-all duration-300" 
               style={{ fontFamily: 'Lato, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Services</a>
            <motion.button 
              className="px-8 py-3 text-xs uppercase tracking-wider text-white rounded-full transition-all duration-500"
              style={{ 
                background: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.1em',
                fontWeight: 500,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content with Hero Image */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          {/* Geometric Design Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: mounted ? 0.1 : 0, scale: mounted ? 1 : 0.8 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-20 right-20 w-96 h-96"
            style={{
              background: 'radial-gradient(circle, rgba(242,107,117,0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
              transform: 'rotate(45deg)'
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.05 : 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-20 left-20 w-80 h-80"
            style={{
              background: 'radial-gradient(circle, rgba(74,85,104,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)'
            }}
          />
        </div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center">
            {/* Clean, Elegant Typography */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-4xl mx-auto"
            >
              <h1 className="relative">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 9rem)',
                    fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    lineHeight: '0.85',
                    color: '#FF5A5A',
                    textTransform: 'uppercase',
                    fontStyle: 'italic'
                  }}
                >
                  EXPERIENCE
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block mt-4"
                  style={{
                    fontSize: 'clamp(4rem, 8vw, 7rem)',
                    fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    lineHeight: '0.9',
                    color: '#1F1F1F',
                    textTransform: 'uppercase'
                  }}
                >
                  ARCHITECT
                </motion.span>
              </h1>

              {/* Ultra-Luxurious Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 25 }}
                transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-12 max-w-3xl mx-auto"
                style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.6',
                  color: '#4A5568'
                }}
              >
                Crafting extraordinary digital experiences through visionary design and unparalleled architectural expertise.
              </motion.p>

              {/* Sophisticated Decorative Element */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
                transition={{ duration: 1.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="my-16 mx-auto origin-center"
                style={{
                  width: '120px',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent 0%, #FF5A5A 30%, #FF4040 50%, #FF5A5A 70%, transparent 100%)',
                  borderRadius: '1px'
                }}
              />
          
              {/* Ultra-Luxurious CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
                transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-8 justify-center mt-12"
              >
                <motion.button
                  className="group relative px-16 py-5 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #FF5A5A 0%, #FF4040 100%)',
                    borderRadius: '0px',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'white',
                    fontWeight: 500,
                    boxShadow: '0 15px 40px rgba(255, 90, 90, 0.25)',
                    border: '1px solid rgba(255, 90, 90, 0.2)'
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: '0 20px 50px rgba(255, 90, 90, 0.35)',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.button>

                <motion.button
                  className="group px-16 py-5 relative"
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #1F1F1F',
                    borderRadius: '0px',
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '16px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#1F1F1F',
                    fontWeight: 500,
                    transition: 'all 0.4s ease'
                  }}
                  whileHover={{
                    borderColor: '#FF5A5A',
                    color: '#FF5A5A',
                    y: -3,
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  About Me
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Sophisticated Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-10 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#F26B75', opacity: 0.3 }}
          />
          <motion.div
            animate={{ 
              x: [0, -20, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-1/3 right-20 w-3 h-3 rounded-full"
            style={{ backgroundColor: '#4A5568', opacity: 0.2 }}
          />
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 0.6 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="relative"
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-5 h-8 border border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-1 bg-gray-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;