import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import UnifiedButton from '@/components/common/UnifiedButton';
import TypographyAnimation from '@/components/common/TypographyAnimation';
import TextReveal from '@/components/common/TextReveal';

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
      className="h-screen relative overflow-hidden flex items-center justify-center"
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
                objectPosition: 'center 20%', // Focus on face and eyes
                transform: 'scale(1.1)', // Slightly larger to ensure eyes are visible
                maskImage: `radial-gradient(ellipse 70% 90% at 50% 20%, 
                  rgba(0,0,0,0.8) 0%, 
                  rgba(0,0,0,0.6) 25%, 
                  rgba(0,0,0,0.3) 50%, 
                  transparent 80%)`,
                WebkitMaskImage: `radial-gradient(ellipse 70% 90% at 50% 20%, 
                  rgba(0,0,0,0.8) 0%, 
                  rgba(0,0,0,0.6) 25%, 
                  rgba(0,0,0,0.3) 50%, 
                  transparent 80%)`
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
          {/* Main Typography - Ultra-Luxurious Display Typography */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* EXPERIENCE - Sophisticated Gradient Typography */}
            <motion.div
              className="relative mb-2"
              initial={{ 
                opacity: 0,
                y: 80,
                scale: 0.8,
                filter: 'blur(20px)'
              }}
              animate={mounted ? { 
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
              } : {}}
              transition={{
                duration: 2.2,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1] // Ultra-smooth, luxurious easing
              }}
              style={{
                fontSize: 'clamp(4.5rem, 10vw, 8rem)',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '0.85',
                textTransform: 'uppercase',
                background: 'linear-gradient(135deg, #FF6663 0%, #FF7A77 15%, #FF8E8B 30%, #FFA29F 45%, #FFB6B3 60%, #FFCAC7 75%, #FFDEDB 90%, #FFF2F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 40px rgba(255, 102, 99, 0.2)'
              }}
            >
              EXPERIENCE
            </motion.div>

            {/* ARCHITECT - Elegant Serif Typography */}
            <motion.div
              className="relative"
              initial={{ 
                opacity: 0,
                y: 60,
                scale: 0.9,
                filter: 'blur(15px)'
              }}
              animate={mounted ? { 
                opacity: 1,
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
              } : {}}
              transition={{
                duration: 1.8,
                delay: 1.2,
                ease: [0.19, 1, 0.22, 1] // Sophisticated easing
              }}
                     style={{
                       fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                       fontFamily: 'Playfair Display, serif',
                       fontWeight: 200, /* Changed to extra light */
                       letterSpacing: '0.05em',
                       lineHeight: '0.9',
                       color: '#6B7280', /* Changed to softer color */
                       textTransform: 'uppercase',
                       fontStyle: 'italic'
                     }}
            >
              ARCHITECT
            </motion.div>

            {/* Subtle Decorative Line */}
            <motion.div
              className="mx-auto mt-6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={mounted ? { scaleX: 1, opacity: 1 } : {}}
              transition={{
                duration: 1.5,
                delay: 1.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                width: '120px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255, 102, 99, 0.6), transparent)',
                transformOrigin: 'center'
              }}
            />
          </motion.div>

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
                  <UnifiedButton
                    variant="primary"
                    size="lg"
                  >
                    View My Work
                  </UnifiedButton>
                </MagneticButton>
                
                <MagneticButton>
                  <UnifiedButton
                    variant="secondary"
                    size="lg"
                  >
                    About Me
                  </UnifiedButton>
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