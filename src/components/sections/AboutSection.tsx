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
      {/* Subtle Background Texture */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(242, 107, 117, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 218, 185, 0.02) 0%, transparent 50%)
            `,
            mixBlendMode: 'multiply'
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

            {/* Right Column - Floating Photo Integration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative h-96 lg:h-[500px]"
            >
              {/* Floating Photo - No Container, Part of Background */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -15, 8, 0],
                  rotate: [0, 1, -0.5, 0],
                  scale: [1, 1.02, 0.98, 1]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                <Image
                  src="/images/silvana-portrait.jpg"
                  alt="Silvana Restrepo - Experience Architect"
                  fill
                  className="object-cover object-center"
                  style={{
                    filter: 'contrast(1.1) saturate(0.9) brightness(1.05)',
                    borderRadius: '12px',
                    maskImage: `radial-gradient(ellipse 80% 90% at 50% 50%, black 60%, transparent 85%)`,
                    WebkitMaskImage: `radial-gradient(ellipse 80% 90% at 50% 50%, black 60%, transparent 85%)`
                  }}
                />
              </motion.div>

              {/* Personal Texture Brand Integration - Organic Flow */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0.3, 0.6, 0.4, 0.3],
                  scale: [1, 1.05, 0.95, 1]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: `
                    radial-gradient(ellipse at 20% 30%, rgba(242, 107, 117, 0.08) 0%, transparent 60%),
                    radial-gradient(ellipse at 80% 70%, rgba(255, 218, 185, 0.06) 0%, transparent 60%),
                    linear-gradient(135deg, transparent 0%, rgba(242, 107, 117, 0.03) 50%, transparent 100%)
                  `,
                  mixBlendMode: 'multiply',
                  borderRadius: '12px'
                }}
              />

              {/* Personal Brand Texture Pattern - Flowing Lines */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0.1, 0.25, 0.15, 0.1],
                  x: [0, 10, -5, 0],
                  y: [0, -8, 4, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23F26B75' stroke-opacity='0.1' stroke-width='0.5'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M20 20c0 11.046 8.954 20 20 20V20H20z'/%3E%3Cpath d='M180 180c0 11.046 8.954 20 20 20v-20h-20z'/%3E%3Cpath d='M180 180c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3Cg stroke='%23FFDAB9' stroke-opacity='0.08' stroke-width='0.3'%3E%3Cpath d='M50 50c0-16.569-13.431-30-30-30v30h30z'/%3E%3Cpath d='M150 150c0 16.569 13.431 30 30 30v-30h-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundSize: '200px 200px',
                  mixBlendMode: 'overlay',
                  borderRadius: '12px'
                }}
              />

              {/* Floating Organic Brand Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 10, 0],
                  x: [0, 15, -8, 0],
                  rotate: [0, 180, 360, 0],
                  opacity: [0.2, 0.5, 0.3, 0.2]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-20 h-20"
                style={{
                  background: 'radial-gradient(circle, rgba(242, 107, 117, 0.12), transparent)',
                  borderRadius: '50%',
                  filter: 'blur(3px)'
                }}
              />

              <motion.div
                animate={{
                  y: [0, 25, -12, 0],
                  x: [0, -18, 9, 0],
                  scale: [0.8, 1.2, 0.9, 0.8],
                  opacity: [0.15, 0.4, 0.25, 0.15]
                }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 5
                }}
                className="absolute bottom-12 left-12 w-16 h-16"
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 218, 185, 0.15), rgba(242, 107, 117, 0.08))',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  filter: 'blur(2px)'
                }}
              />

              {/* Flowing Brand Lines */}
              <motion.div
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -15, 10, 0],
                  rotate: [0, 2, -1, 0],
                  opacity: [0.1, 0.3, 0.15, 0.1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/3 left-4 w-32 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(242, 107, 117, 0.4), transparent)',
                  transform: 'rotate(-15deg)'
                }}
              />

              <motion.div
                animate={{
                  x: [0, -25, 15, 0],
                  y: [0, 20, -10, 0],
                  rotate: [0, -1, 2, 0],
                  opacity: [0.08, 0.25, 0.12, 0.08]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 8
                }}
                className="absolute bottom-1/4 right-6 w-24 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 218, 185, 0.5), transparent)',
                  transform: 'rotate(20deg)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 10, 0],
          x: [0, 10, -5, 0],
          opacity: [0.05, 0.15, 0.08, 0.05]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-24 h-24"
        style={{
          background: 'radial-gradient(circle, rgba(242, 107, 117, 0.08), transparent)',
          filter: 'blur(30px)',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, -8, 0],
          x: [0, -12, 6, 0],
          opacity: [0.03, 0.12, 0.06, 0.03]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-1/3 left-1/5 w-32 h-32"
        style={{
          background: 'radial-gradient(circle, rgba(255, 218, 185, 0.06), transparent)',
          filter: 'blur(40px)',
          borderRadius: '50%'
        }}
      />
    </section>
  );
};

export default AboutSection;