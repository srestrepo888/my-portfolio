import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('@/components/effects/ParticleField'), { ssr: false });
const MagneticButton = dynamic(() => import('@/components/effects/MagneticButton'), { ssr: false });
const LiquidText = dynamic(() => import('@/components/effects/LiquidText'), { ssr: false });

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Subtle parallax for background elements
  const y = useTransform(scrollY, [0, 500], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.section 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        backgroundColor: '#FDF6F0',
        opacity
      }}
    >
      {/* Organic Photo Integration - Face-focused Background Texture */}
      <div className="absolute inset-0">
        {/* Photo organically embedded in background - focusing on face */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div className="relative w-full h-full">
            <img
              src="/images/silvana-portrait-hero.jpg"
              alt=""
              className="absolute w-full h-full"
              style={{
                opacity: 0.12,
                filter: 'contrast(1.15) saturate(0.9) brightness(1.1)',
                objectFit: 'cover',
                objectPosition: 'center 25%', // Focus on face, not chest
                transform: 'scale(1.1)',
                maskImage: `radial-gradient(ellipse 50% 70% at 50% 30%, 
                  rgba(0,0,0,0.9) 0%, 
                  rgba(0,0,0,0.7) 25%, 
                  rgba(0,0,0,0.4) 50%, 
                  transparent 75%)`,
                WebkitMaskImage: `radial-gradient(ellipse 50% 70% at 50% 30%, 
                  rgba(0,0,0,0.9) 0%, 
                  rgba(0,0,0,0.7) 25%, 
                  rgba(0,0,0,0.4) 50%, 
                  transparent 75%)`
              }}
            />
            
            {/* Organic texture overlay - creates natural embedding */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 60% 80% at 50% 20%, 
                    transparent 0%, 
                    rgba(253, 246, 240, 0.1) 20%,
                    rgba(253, 246, 240, 0.3) 40%,
                    rgba(253, 246, 240, 0.6) 60%,
                    rgba(253, 246, 240, 0.85) 80%,
                    #FDF6F0 100%),
                  linear-gradient(180deg, 
                    transparent 0%, 
                    rgba(253, 246, 240, 0.2) 30%, 
                    rgba(253, 246, 240, 0.9) 70%, 
                    #FDF6F0 100%)`,
                mixBlendMode: 'normal'
              }}
            />
          </div>
        </motion.div>

        {/* Subtle organic noise texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
            mixBlendMode: 'multiply'
          }}
        />
      </div>

      {/* Subtle Particle System */}
      {mounted && <ParticleField />}

      {/* Clean, Minimal Navigation */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 z-30 px-8 lg:px-16 py-8"
      >
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl lg:text-3xl cursor-pointer"
            style={{ 
              fontFamily: 'Georgia, serif',
              color: '#6B7280',
              fontWeight: 400,
              letterSpacing: '-0.01em'
            }}
          >
            Silvana
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Home', 'About', 'Projects', 'Experience', 'Services'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs uppercase tracking-wider text-gray-600 hover:text-gray-800 transition-colors duration-300"
                style={{ 
                  fontFamily: 'Inter, sans-serif', 
                  letterSpacing: '0.1em', 
                  fontWeight: 500 
                }}
              >
                {item}
              </a>
            ))}
            
            <motion.button 
              className="px-8 py-3 text-xs uppercase tracking-wider"
              style={{ 
                backgroundColor: '#4A5568',
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.12em',
                fontWeight: 600,
                borderRadius: '50px'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: '#2D3748'
              }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Main Content - Clean, Centered, Typography-Focused */}
      <div className="relative min-h-screen flex items-center justify-center px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center relative z-10"
        >
          {/* Liquid Morphing Typography - The Main Focus */}
          <motion.h1 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {mounted ? (
              <>
                <LiquidText
                  text="EXPERIENCE"
                  className="block"
                  style={{ 
                    fontSize: 'clamp(4rem, 9vw, 7rem)',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 300,
                    letterSpacing: '0.08em',
                    lineHeight: '0.9',
                    color: '#F26B75',
                    textTransform: 'uppercase'
                  }}
                  delay={0.5}
                />
                <LiquidText
                  text="ARCHITECT"
                  className="block mt-4"
                  style={{ 
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 200,
                    letterSpacing: '0.2em',
                    lineHeight: '0.9',
                    color: '#4A5568',
                    textTransform: 'uppercase'
                  }}
                  delay={0.7}
                />
              </>
            ) : (
              <>
                <span 
                  className="block"
                  style={{ 
                    fontSize: 'clamp(4rem, 9vw, 7rem)',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 300,
                    letterSpacing: '0.08em',
                    lineHeight: '0.9',
                    color: '#F26B75',
                    textTransform: 'uppercase'
                  }}
                >
                  Experience
                </span>
                <span 
                  className="block mt-4"
                  style={{ 
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 200,
                    letterSpacing: '0.2em',
                    lineHeight: '0.9',
                    color: '#4A5568',
                    textTransform: 'uppercase'
                  }}
                >
                  Architect
                </span>
              </>
            )}
          </motion.h1>

          {/* Subtle Description - Optional */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: mounted ? 0.8 : 0, y: mounted ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
            style={{
              fontSize: '18px',
              fontFamily: 'Inter, sans-serif',
              color: '#6B7280',
              fontWeight: 300,
              lineHeight: '1.6',
              letterSpacing: '0.02em'
            }}
          >
            Transforming business vision into human experiences through strategic design and architectural excellence
          </motion.p>

          {/* Clean CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {mounted && (
              <>
                <MagneticButton>
                  <motion.button 
                    className="px-12 py-4"
                    style={{ 
                      backgroundColor: '#F26B75',
                      color: 'white',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      borderRadius: '2px'
                    }}
                    whileHover={{ 
                      backgroundColor: '#E85D67',
                      y: -2
                    }}
                  >
                    View My Work
                  </motion.button>
                </MagneticButton>
                
                <MagneticButton>
                  <motion.button 
                    className="px-12 py-4"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: '1px solid #CBD5E1',
                      color: '#6B7280',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 500,
                      borderRadius: '2px'
                    }}
                    whileHover={{ 
                      borderColor: '#9CA3AF',
                      y: -2
                    }}
                  >
                    About Me
                  </motion.button>
                </MagneticButton>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 0.4 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-5 h-8 border border-gray-400/40 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-1 bg-gray-500/60 rounded-full mt-2"
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
    </motion.section>
  );
};

export default HeroSection;