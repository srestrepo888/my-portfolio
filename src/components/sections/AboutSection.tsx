import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: '#FDF6F0'
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
              linear-gradient(135deg, #FDF6F0 0%, #F8F0E8 25%, #F5E8E0 50%, #F2E0D8 75%, #F0D8D0 100%),
              radial-gradient(ellipse at 20% 30%, rgba(242, 107, 117, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 218, 185, 0.06) 0%, transparent 60%)
            `,
            mixBlendMode: 'normal'
          }}
        />
        
        {/* Personal Brand Texture Pattern - Organic Lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F26B75' stroke-opacity='0.12' stroke-width='0.8'%3E%3Cpath d='M50 50c0-27.614-22.386-50-50-50v50h50z'/%3E%3Cpath d='M50 50c0 27.614 22.386 50 50 50V50H50z'/%3E%3Cpath d='M350 350c0 27.614 22.386 50 50 50v-50h-50z'/%3E%3Cpath d='M350 350c0-27.614-22.386-50-50-50v50h50z'/%3E%3Cpath d='M100 100c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M300 300c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3C/g%3E%3Cg stroke='%23FFDAB9' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M80 80c0-22.091-17.909-40-40-40v40h40z'/%3E%3Cpath d='M320 320c0 22.091 17.909 40 40 40v-40h-40z'/%3E%3Cpath d='M150 150c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M250 250c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3C/g%3E%3Cg stroke='%23F26B75' stroke-opacity='0.08' stroke-width='0.3'%3E%3Cpath d='M120 120c0-6.627-5.373-12-12-12v12h12z'/%3E%3Cpath d='M280 280c0 6.627 5.373 12 12 12v-12h-12z'/%3E%3Cpath d='M200 200c0-33.137-26.863-60-60-60v60h60z'/%3E%3Cpath d='M200 200c0 33.137 26.863 60 60 60V200H200z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px',
            mixBlendMode: 'multiply',
            opacity: 0.6
          }}
        />
        
        {/* Flowing Organic Lines Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F26B75' stroke-opacity='0.1' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M20 20c0 11.046 8.954 20 20 20V20H20z'/%3E%3Cpath d='M280 280c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3Cpath d='M280 280c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M50 50c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M250 250c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3Cpath d='M100 100c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M200 200c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3Cpath d='M150 150c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M150 150c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3C/g%3E%3Cg stroke='%23FFDAB9' stroke-opacity='0.12' stroke-width='0.3'%3E%3Cpath d='M80 80c0-22.091-17.909-40-40-40v40h40z'/%3E%3Cpath d='M220 220c0 22.091 17.909 40 40 40v-40h-40z'/%3E%3Cpath d='M120 120c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M180 180c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px',
            mixBlendMode: 'overlay',
            opacity: 0.4
          }}
        />
      </motion.div>
      
      {/* Content Container */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div ref={ref} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 
              className="mb-6"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                color: '#F26B75'
              }}
            >
              About Me
            </h2>
            
            {/* Elegant Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mx-auto"
              style={{
                width: '60px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #F26B75, transparent)'
              }}
            />
          </motion.div>

          {/* Two-Column Layout - Text Left, Photo Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p 
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: '1.7',
                  color: '#4A5568'
                }}
              >
                I believe the most compelling stories begin with <span style={{ color: '#F26B75', fontWeight: 500 }}>curiosity</span>—a 
                spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design.
              </p>
              
              <p 
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: '1.7',
                  color: '#4A5568'
                }}
              >
                I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide.
              </p>

              <p 
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: '1.7',
                  color: '#4A5568'
                }}
              >
                Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span style={{ color: '#F26B75', fontWeight: 500 }}>#human perspective</span>.
              </p>

              <p 
                style={{
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: '1.7',
                  color: '#4A5568'
                }}
              >
                Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
              </p>

              {/* Elegant Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative mt-12 pt-8"
                style={{
                  borderTop: '1px solid rgba(242, 107, 117, 0.2)'
                }}
              >
                <span 
                  className="absolute -top-4 left-0 opacity-30"
                  style={{
                    fontSize: '60px',
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#F26B75',
                    lineHeight: 1
                  }}
                >
                  "
                </span>
                <p 
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: '1.5',
                    color: '#4A5568',
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  The art of my craft lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Truly Floating Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-96 lg:h-[500px]"
            >
                   {/* Elegant Static Photo */}
                   <motion.div
                     className="absolute inset-0"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                     whileHover={{ 
                       scale: 1.02,
                       transition: { duration: 0.3, ease: "easeOut" }
                     }}
                     style={{
                       filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))',
                       maskImage: `radial-gradient(ellipse 85% 95% at 50% 50%, black 70%, transparent 90%)`,
                       WebkitMaskImage: `radial-gradient(ellipse 85% 95% at 50% 50%, black 70%, transparent 90%)`
                     }}
                   >
                <Image
                  src="/images/silvana-portrait.jpg"
                  alt="Silvana Restrepo - Experience Architect"
                  fill
                  className="object-cover object-center"
                  style={{
                    filter: 'contrast(1.1) saturate(0.9) brightness(1.05)',
                    borderRadius: '20px'
                  }}
                />
              </motion.div>

                   {/* Elegant Static Brand Elements Around Photo */}
                   <div
                     className="absolute top-4 right-4 w-24 h-24"
                     style={{
                       background: 'radial-gradient(circle, rgba(242, 107, 117, 0.15), transparent)',
                       borderRadius: '50%',
                       filter: 'blur(4px)',
                       opacity: 0.4
                     }}
                   />

                   <div
                     className="absolute bottom-8 left-8 w-20 h-20"
                     style={{
                       background: 'linear-gradient(45deg, rgba(255, 218, 185, 0.2), rgba(242, 107, 117, 0.1))',
                       borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                       filter: 'blur(3px)',
                       opacity: 0.3
                     }}
                   />

                   {/* Elegant Static Brand Lines Around Photo */}
                   <div
                     className="absolute top-1/4 left-2 w-40 h-px"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(242, 107, 117, 0.5), transparent)',
                       transform: 'rotate(-20deg)',
                       opacity: 0.2
                     }}
                   />

                   <div
                     className="absolute bottom-1/3 right-2 w-36 h-px"
                     style={{
                       background: 'linear-gradient(90deg, transparent, rgba(255, 218, 185, 0.6), transparent)',
                       transform: 'rotate(25deg)',
                       opacity: 0.15
                     }}
                   />

                   {/* Additional Static Elements */}
                   <div
                     className="absolute top-1/2 right-1/4 w-16 h-16"
                     style={{
                       background: 'conic-gradient(from 45deg, rgba(242, 107, 117, 0.1), rgba(255, 218, 185, 0.08), rgba(242, 107, 117, 0.1))',
                       borderRadius: '50%',
                       filter: 'blur(2px)',
                       opacity: 0.2
                     }}
                   />
            </motion.div>
          </div>
        </div>
      </div>

           {/* Subtle Static Background Elements */}
           <div
             className="absolute top-1/4 right-1/4 w-24 h-24"
             style={{
               background: 'radial-gradient(circle, rgba(242, 107, 117, 0.08), transparent)',
               filter: 'blur(30px)',
               borderRadius: '50%',
               opacity: 0.1
             }}
           />
           
           <div
             className="absolute bottom-1/3 left-1/5 w-32 h-32"
             style={{
               background: 'radial-gradient(circle, rgba(255, 218, 185, 0.06), transparent)',
               filter: 'blur(40px)',
               borderRadius: '50%',
               opacity: 0.08
             }}
           />
    </section>
  );
};

export default AboutSection;