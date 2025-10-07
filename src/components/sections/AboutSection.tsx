import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';
import TypographyAnimation from '@/components/common/TypographyAnimation';
import TextReveal from '@/components/common/TextReveal';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -30]);
  const opacity = useTransform(scrollY, [0, 800], [0.1, 0.05]);

  return (
    <section 
      id="about" 
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{
        backgroundColor: '#FFFBEE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Personal Texture Brand Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Your Personal Texture Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(135deg, #FFFBEE 0%, #F8F0E8 25%, #F5E8E0 50%, #F2E0D8 75%, #F0D8D0 100%),
              radial-gradient(ellipse at 20% 30%, rgba(255, 102, 99, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 153, 150, 0.06) 0%, transparent 60%)
            `,
            mixBlendMode: 'normal'
          }}
        />
        
        {/* Personal Brand Texture Pattern - Organic Lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23FF6663' stroke-opacity='0.12' stroke-width='0.8'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v50h50z'/%3E%3Cpath d='M50 50c0 27.614 22.386 50 50 50V50H50z'/%3E%3Cpath d='M350 350c0 27.614 22.386 50 50 50v-50h-50z'/%3E%3Cpath d='M350 350c0-27.614-22.386-50-50-50v50h50z'/%3E%3Cpath d='M100 100c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M300 300c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3C/g%3E%3Cg stroke='%23FF9996' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M80 80c0-22.091-17.909-40-40-40v40h40z'/%3E%3Cpath d='M320 320c0 22.091 17.909 40 40 40v-40h-40z'/%3E%3Cpath d='M150 150c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M250 250c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3C/g%3E%3Cg stroke='%23FF6663' stroke-opacity='0.08' stroke-width='0.3'%3E%3Cpath d='M120 120c0-6.627-5.373-12-12-12v12h12z'/%3E%3Cpath d='M280 280c0 6.627 5.373 12 12 12v-12h-12z'/%3E%3Cpath d='M200 200c0-33.137-26.863-60-60-60v60h60z'/%3E%3Cpath d='M200 200c0 33.137 26.863 60 60 60V200H200z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px',
            mixBlendMode: 'multiply',
            opacity: 0.6
          }}
        />
        
        {/* Flowing Organic Lines Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23FF6663' stroke-opacity='0.1' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M20 20c0 11.046 8.954 20 20 20V20H20z'/%3E%3Cpath d='M280 280c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3Cpath d='M280 280c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M50 50c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M250 250c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3Cpath d='M100 100c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M200 200c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3Cpath d='M150 150c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M150 150c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3C/g%3E%3Cg stroke='%23FF9996' stroke-opacity='0.12' stroke-width='0.3'%3E%3Cpath d='M80 80c0-22.091-17.909-40-40-40v40h40z'/%3E%3Cpath d='M220 220c0 22.091 17.909 40 40 40v-40h-40z'/%3E%3Cpath d='M120 120c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M180 180c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            mixBlendMode: 'overlay',
            opacity: 0.4
          }}
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10 w-full">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionHeader 
            number="01"
            title="About Me"
            subtitle="I believe the most compelling stories begin with curiosity—a spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design."
          />

          {/* Two-Column Layout - Text Left, Photo Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <TypographyAnimation
              variant="reveal-left"
              delay={0.3}
              duration={0.8}
              className="space-y-6"
            >
              <TextReveal
                text="I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide."
                className="text-body"
                direction="up"
                delay={0.4}
                duration={0.6}
                stagger={0.02}
                splitBy="word"
              />

              <TextReveal
                text="Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the #human perspective."
                className="text-body"
                direction="up"
                delay={0.6}
                duration={0.6}
                stagger={0.02}
                splitBy="word"
                style={{
                  '--highlight-color': '#FF6663'
                } as React.CSSProperties}
              />

              <TextReveal
                text="Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion."
                className="text-body"
                direction="up"
                delay={0.8}
                duration={0.6}
                stagger={0.02}
                splitBy="word"
              />

              {/* Elegant Quote */}
              <TypographyAnimation
                variant="reveal-up"
                delay={1.0}
                duration={0.8}
                className="relative mt-8 pt-6"
                style={{
                  borderTop: '1px solid rgba(255, 102, 99, 0.2)'
                }}
              >
                <span
                  className="absolute -top-3 left-0 opacity-30 text-quote-large"
                  style={{
                    color: '#FF6663',
                    lineHeight: 1
                  }}
                >
                  "
                </span>
                <TextReveal
                  text="The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                  className="text-quote"
                  direction="up"
                  delay={1.2}
                  duration={0.8}
                  stagger={0.03}
                  splitBy="word"
                  style={{
                    color: '#4A5568',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </TypographyAnimation>
            </TypographyAnimation>

            {/* Right Column - Truly Floating Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center"
            >
              {/* Truly Floating Photo - No Container */}
              <motion.div
                className="relative w-full h-full"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.2)) drop-shadow(0 10px 20px rgba(255, 102, 99, 0.1))',
                  borderRadius: '24px',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src="/images/silvana-portrait.jpg"
                  alt="Silvana Restrepo - Experience Architect"
                  fill
                  className="object-cover object-center"
                  style={{
                    filter: 'contrast(1.05) saturate(0.9) brightness(1.02)',
                    transform: 'scale(1.02)'
                  }}
                />
              </motion.div>

              {/* Sophisticated Floating Elements - No White Frame */}
              <motion.div
                className="absolute top-6 right-6 w-20 h-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 0.6, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.0 }}
                style={{
                  background: 'radial-gradient(circle, rgba(255, 102, 99, 0.2), rgba(255, 179, 71, 0.1), transparent)',
                  borderRadius: '50%',
                  filter: 'blur(8px)'
                }}
              />

              <motion.div
                className="absolute bottom-8 left-8 w-16 h-16"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 0.4, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.2 }}
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 153, 150, 0.3), rgba(255, 179, 71, 0.2), rgba(255, 102, 99, 0.1))',
                  borderRadius: '50%',
                  filter: 'blur(6px)'
                }}
              />

              <motion.div
                className="absolute top-1/3 left-4 w-32 h-px"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 0.5, scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.4 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 102, 99, 0.4), transparent)',
                  transform: 'rotate(-12deg)',
                  transformOrigin: 'left center'
                }}
              />

              <motion.div
                className="absolute bottom-1/4 right-4 w-28 h-px"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={inView ? { opacity: 0.4, scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.6 }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 153, 150, 0.5), transparent)',
                  transform: 'rotate(8deg)',
                  transformOrigin: 'right center'
                }}
              />

              <motion.div
                className="absolute top-1/2 right-1/3 w-12 h-12"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={inView ? { opacity: 0.3, scale: 1, rotate: 45 } : {}}
                transition={{ duration: 1.8, delay: 1.8 }}
                style={{
                  background: 'conic-gradient(from 45deg, rgba(255, 102, 99, 0.15), rgba(255, 153, 150, 0.1), rgba(255, 102, 99, 0.15))',
                  borderRadius: '50%',
                  filter: 'blur(4px)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

           {/* Sophisticated Background Elements */}
           <div
             className="absolute top-1/4 right-1/4 w-24 h-24"
             style={{
               background: 'radial-gradient(circle, rgba(255, 102, 99, 0.08), transparent)',
               filter: 'blur(30px)',
               borderRadius: '50%',
               opacity: 0.1
             }}
           />
           
           <div
             className="absolute bottom-1/3 left-1/5 w-32 h-32"
             style={{
               background: 'radial-gradient(circle, rgba(255, 153, 150, 0.06), transparent)',
               filter: 'blur(40px)',
               borderRadius: '50%',
               opacity: 0.08
             }}
           />
    </section>
  );
};

export default AboutSection;