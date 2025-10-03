import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      style={{ 
        background: 'linear-gradient(135deg, #FDF6F0 0%, #FEFEFE 40%, #FDF6F0 100%)'
      }}
    >
      {/* Sophisticated Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute top-0 left-0 right-0 z-20 px-12 py-10"
      >
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
          {/* Elegant Logo */}
          <motion.div 
            className="text-2xl" 
            style={{ 
              fontFamily: 'Didot, Playfair Display, serif',
              color: '#4A5568',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
            whileHover={{ scale: 1.02 }}
          >
            Silvana
          </motion.div>
          
          {/* Refined Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#home" className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-all duration-300" 
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Home</a>
            <a href="#about" className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-all duration-300" 
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>About</a>
            <a href="#projects" className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-all duration-300" 
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Projects</a>
            <a href="#experience" className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-all duration-300" 
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Experience</a>
            <a href="#services" className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 transition-all duration-300" 
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', fontWeight: 400 }}>Services</a>
            <motion.button 
              className="px-8 py-3 text-xs uppercase tracking-wider text-white rounded-full transition-all duration-500"
              style={{ 
                background: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)',
                fontFamily: 'Inter, sans-serif',
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

        <div className="container mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -60 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              {/* Sophisticated Typography */}
              <div className="relative">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 0.1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -top-8 -left-4 text-9xl font-thin"
                  style={{ 
                    fontFamily: 'Didot, serif',
                    color: '#E5E7EB',
                    zIndex: -1
                  }}
                >
                  01
                </motion.span>
                
                <h1 className="relative">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="block"
                    style={{ 
                      fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                      fontFamily: 'Didot, Playfair Display, serif',
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      lineHeight: '0.95',
                      color: '#F26B75',
                      textTransform: 'uppercase'
                    }}
                  >
                    Experience
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="block mt-2"
                    style={{ 
                      fontSize: 'clamp(3rem, 6vw, 5rem)',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 200,
                      letterSpacing: '0.15em',
                      lineHeight: '1',
                      color: '#4A5568',
                      textTransform: 'uppercase'
                    }}
                  >
                    Architect
                  </motion.span>
                </h1>

                {/* Decorative Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: mounted ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="my-8 origin-left"
                  style={{
                    width: '80px',
                    height: '1px',
                    background: 'linear-gradient(90deg, #F26B75 0%, transparent 100%)'
                  }}
                />
              </div>
          
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex gap-4 mt-8"
              >
                <motion.button 
                  className="group relative px-10 py-4 overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #F26B75 0%, #E91E63 100%)',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'white',
                    fontWeight: 500,
                    boxShadow: '0 10px 30px rgba(242, 107, 117, 0.2)'
                  }}
                  whileHover={{ 
                    y: -2,
                    boxShadow: '0 15px 40px rgba(242, 107, 117, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
                
                <motion.button 
                  className="group px-10 py-4 relative"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid #D1D5DB',
                    borderRadius: '2px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#6B7280',
                    fontWeight: 500
                  }}
                  whileHover={{ 
                    borderColor: '#9CA3AF',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  About Me
                </motion.button>
              </motion.div>
            </motion.div>
        
            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 60 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y }}
              className="relative"
            >
              <div className="relative">
                {/* Image Frame with Gradient */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: mounted ? 1 : 0.9 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '200px 200px 200px 200px',
                    boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.15)',
                    background: 'linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 100%)'
                  }}
                >
                  <div
                    className="relative w-full"
                    style={{
                      paddingBottom: '120%',
                      background: 'linear-gradient(135deg, rgba(242,107,117,0.1) 0%, rgba(74,85,104,0.05) 100%)'
                    }}
                  >
                    <img
                      src="/images/hero-portrait.svg"
                      alt="Silvana Restrepo"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{
                        filter: 'contrast(1.1) brightness(1.05)',
                        opacity: mounted ? 1 : 0,
                        transition: 'opacity 1s ease-in-out'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating Design Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-10 -right-10 w-20 h-20"
                  style={{
                    background: 'linear-gradient(135deg, #F26B75 0%, #E91E63 100%)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    opacity: 0.1
                  }}
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -left-8 w-16 h-16"
                  style={{
                    background: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)',
                    borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                    opacity: 0.08
                  }}
                />
              </div>
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