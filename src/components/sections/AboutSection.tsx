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

            {/* Right Column - Flowing Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Photo Container with Elegant Flow */}
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                {/* Elegant Photo Frame */}
                <div 
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '8px',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(242, 107, 117, 0.1)',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  <Image
                    src="/images/silvana-portrait.jpg"
                    alt="Silvana Restrepo - Experience Architect"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    style={{
                      filter: 'contrast(1.05) saturate(0.95)',
                      transform: 'scale(1.05)'
                    }}
                  />
                  
                  {/* Subtle Overlay for Elegance */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(242, 107, 117, 0.05) 0%, transparent 50%, rgba(255, 218, 185, 0.03) 100%)',
                      mixBlendMode: 'multiply'
                    }}
                  />
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 5, 0],
                    rotate: [0, 2, -1, 0],
                    opacity: [0.3, 0.6, 0.4, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16"
                  style={{
                    background: 'radial-gradient(circle, rgba(242, 107, 117, 0.1), transparent)',
                    borderRadius: '50%',
                    filter: 'blur(2px)'
                  }}
                />

                <motion.div
                  animate={{
                    y: [0, 8, -4, 0],
                    rotate: [0, -1, 2, 0],
                    opacity: [0.2, 0.5, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 -left-6 w-12 h-12"
                  style={{
                    background: 'linear-gradient(45deg, rgba(255, 218, 185, 0.15), transparent)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    filter: 'blur(1px)'
                  }}
                />
              </motion.div>
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