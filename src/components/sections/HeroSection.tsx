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
          {/* Main Typography - Sophisticated Display Typography */}
          <TypographyAnimation
            variant="reveal-up"
            delay={0.4}
            duration={1.2}
            className="mb-8"
            as="h1"
          >
            {/* EXPERIENCE - Display Typography with Gradient */}
            <TextReveal
              text="EXPERIENCE"
              className="text-display-1 mb-2"
              direction="up"
              delay={0.6}
              duration={1.5}
              stagger={0.1}
              splitBy="character"
              style={{
                background: 'linear-gradient(90deg, #FF6663 0%, #FF6663 30%, rgba(255, 102, 99, 0.3) 70%, rgba(255, 102, 99, 0.1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textTransform: 'uppercase'
              }}
            />

            {/* ARCHITECT - Heading Typography */}
            <TextReveal
              text="ARCHITECT"
              className="text-display-2"
              direction="up"
              delay={1.0}
              duration={1.2}
              stagger={0.08}
              splitBy="character"
              style={{
                color: '#2D3748',
                textTransform: 'uppercase'
              }}
            />
          </TypographyAnimation>

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