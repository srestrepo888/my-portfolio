import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const MagneticButton = dynamic(() => import('@/components/effects/MagneticButton'), { ssr: false });

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
        backgroundColor: '#FFFBEE',
        opacity
      }}
    >
      {/* Beautiful Element - Face-focused Background Portrait */}
      <div className="absolute inset-0">
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
                opacity: 0.15,
                filter: 'contrast(1.1) saturate(0.8) brightness(1.05)',
                objectFit: 'cover',
                objectPosition: 'center 30%', // Focus on face
                transform: 'scale(1.05)',
                maskImage: `radial-gradient(ellipse 60% 80% at 50% 25%, 
                  rgba(0,0,0,0.8) 0%, 
                  rgba(0,0,0,0.6) 30%, 
                  rgba(0,0,0,0.3) 60%, 
                  transparent 85%)`,
                WebkitMaskImage: `radial-gradient(ellipse 60% 80% at 50% 25%, 
                  rgba(0,0,0,0.8) 0%, 
                  rgba(0,0,0,0.6) 30%, 
                  rgba(0,0,0,0.3) 60%, 
                  transparent 85%)`
              }}
            />
            
            {/* Gradient overlay for seamless integration */}
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(ellipse 70% 90% at 50% 20%, 
                    transparent 0%, 
                    rgba(255, 251, 238, 0.1) 25%,
                    rgba(255, 251, 238, 0.3) 50%,
                    rgba(255, 251, 238, 0.7) 75%,
                    #FFFBEE 100%)`,
                mixBlendMode: 'normal'
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Main Content - Clean, Centered, Typography-Focused */}
      <div className="relative min-h-screen flex items-center justify-center px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-center relative z-10"
        >
          {/* Main Typography - Matching Screenshot Exactly */}
          <motion.h1 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* EXPERIENCE - Large Serif with Gradient Effect */}
            <motion.div
              className="block mb-2"
              initial={{ 
                opacity: 0,
                y: 60,
                scale: 0.9
              }}
              animate={mounted ? { 
                opacity: 1,
                y: 0,
                scale: 1
              } : {}}
              transition={{
                duration: 1.5,
                delay: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{ 
                fontSize: 'clamp(4.5rem, 10vw, 8rem)',
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                letterSpacing: '0.05em',
                lineHeight: '0.85',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, #FF6663 0%, #FF6663 30%, rgba(255, 102, 99, 0.3) 70%, rgba(255, 102, 99, 0.1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              EXPERIENCE
            </motion.div>

            {/* ARCHITECT - Smaller Dark Text */}
            <motion.div
              className="block"
              initial={{ 
                opacity: 0,
                y: 40,
                scale: 0.95
              }}
              animate={mounted ? { 
                opacity: 1,
                y: 0,
                scale: 1
              } : {}}
              transition={{
                duration: 1.2,
                delay: 1.0,
                ease: [0.19, 1, 0.22, 1]
              }}
              style={{ 
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                letterSpacing: '0.08em',
                lineHeight: '0.9',
                color: '#1F1F1F',
                textTransform: 'uppercase'
              }}
            >
              ARCHITECT
            </motion.div>
          </motion.h1>

          {/* Rounded CTA Buttons - Bottom System */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            {mounted && (
              <>
                <MagneticButton>
                  <motion.button 
                    className="px-10 py-4"
                    style={{ 
                      backgroundColor: '#FF6663',
                      color: 'white',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      borderRadius: '50px', // Fully rounded
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      backgroundColor: '#E55A57',
                      y: -2,
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View My Work
                  </motion.button>
                </MagneticButton>
                
                <MagneticButton>
                  <motion.button 
                    className="px-10 py-4"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: '1px solid #CBD5E1',
                      color: '#6B7280',
                      fontFamily: 'Lato, sans-serif',
                      fontSize: 'clamp(0.9rem, 1.3vw, 1rem)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 400,
                      borderRadius: '50px', // Fully rounded
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      borderColor: '#9CA3AF',
                      color: '#4A5568',
                      y: -2,
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    About Me
                  </motion.button>
                </MagneticButton>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;