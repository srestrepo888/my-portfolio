import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ImageOptimizer from '@/components/ui/ImageOptimizer';
import AnimatedSection from '@/components/common/AnimatedSection';

const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <AnimatedSection
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
      animation="fadeIn"
      duration={1}
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: y1 }}
      >
        <div 
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: y2 }}
      >
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--color-accent-light)' }}
        />
      </motion.div>

      <motion.div 
        className="max-w-[1200px] mx-auto px-6 relative z-10 pt-24"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="font-serif mb-4 leading-tight"
              style={{ fontSize: 'var(--font-hero)' }}
            >
              <span 
                className="block font-bold bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent"
              >
                EXPERIENCE
              </span>
              <span 
                className="block font-bold"
                style={{ color: 'var(--color-primary)' }}
              >
                ARCHITECT
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
              style={{ 
                fontSize: 'var(--font-body)',
                color: 'var(--color-primary-gray)'
              }}
            >
              Crafting digital experiences that blend architectural thinking with user-centered design. 
              Transforming complex problems into elegant solutions. 
              Building the future, one interface at a time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                className="touchable px-8 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px]"
                style={{ 
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-background)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button 
                className="touchable px-8 py-3 rounded-full font-medium transition-all duration-300 border-2 min-h-[44px]"
                style={{ 
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  backgroundColor: 'transparent'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-background)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-[40px] blur-2xl opacity-20"
                style={{ 
                  background: `linear-gradient(135deg, var(--color-accent), var(--color-accent-light))`
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div 
                className="relative backdrop-blur-sm rounded-[40px] p-4 sm:p-8 shadow-xl"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <div 
                  className="aspect-[3/4] rounded-[30px] overflow-hidden"
                  style={{ backgroundColor: 'var(--color-background-cream)' }}
                >
                  <ImageOptimizer
                    src="/images/hero-portrait.svg"
                    alt="Silvana Restrepo - Experience Architect"
                    aspectRatio="3/4"
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
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
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div 
              className="w-px h-12"
              style={{ backgroundColor: 'var(--color-primary-light)', opacity: 0.3 }}
            />
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
};

export default HeroSection;