import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  const opacity = useTransform(scrollY, [0, 800], [0.15, 0.08]);

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        backgroundColor: '#FDF6F0'
      }}
    >
      {/* Organic Photo Integration - Flows with Personal Texture */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        {/* Photo as Natural Background Texture - NOT in container */}
        <div className="absolute inset-0">
          <img
            src="/images/silvana-portrait.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              opacity: 0.12,
              filter: 'contrast(1.05) saturate(0.9) blur(0.5px)',
              transform: 'scale(1.2)',
              maskImage: `linear-gradient(to bottom, 
                transparent 0%, 
                black 20%, 
                black 50%, 
                transparent 90%)`,
              WebkitMaskImage: `linear-gradient(to bottom, 
                transparent 0%, 
                black 20%, 
                black 50%, 
                transparent 90%)`
            }}
          />
        </div>

        {/* Personal Texture Overlay - Organic Flow */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(242, 107, 117, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse at 70% 60%, rgba(255, 218, 185, 0.06) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 50%, rgba(253, 246, 240, 0.9) 30%, rgba(253, 246, 240, 0.95) 70%)
            `,
            mixBlendMode: 'normal'
          }}
        />
      </motion.div>
      
      {/* Content Layer */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span 
            style={{
              fontSize: '120px',
              fontFamily: 'Georgia, serif',
              color: '#E5E7EB',
              fontWeight: 100,
              opacity: 0.3
            }}
          >
            01
          </span>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Clean Typography - Main Focus */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 
              className="mb-8"
              style={{
                fontSize: 'clamp(3.5rem, 7vw, 5rem)',
                fontFamily: 'Georgia, serif',
                fontWeight: 300,
                letterSpacing: '0.05em',
                lineHeight: '1',
                color: '#F26B75'
              }}
            >
              About Me
            </h2>
            
            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto"
              style={{
                width: '80px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #F26B75, transparent)'
              }}
            />
          </motion.div>
          
          {/* Text Content - Flowing Naturally */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 relative"
          >
            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568'
              }}
            >
              I believe the most compelling stories begin with <span style={{ color: '#F26B75', fontWeight: 500 }}>curiosity</span>—a 
              spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
            </p>
            
            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568'
              }}
            >
              I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide.
            </p>

            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568'
              }}
            >
              Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span style={{ color: '#F26B75', fontWeight: 500 }}>#human perspective</span>.
            </p>

            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568'
              }}
            >
              Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
            </p>

            <p 
              className="max-w-3xl mx-auto text-center"
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568'
              }}
            >
              Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility.
            </p>

            {/* Elegant Quote - Organic Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative max-w-2xl mx-auto mt-16 text-center"
            >
              <span 
                className="absolute -top-8 left-0 opacity-20"
                style={{
                  fontSize: '120px',
                  fontFamily: 'Georgia, serif',
                  color: '#F26B75',
                  lineHeight: 1
                }}
              >
                "
              </span>
              <p 
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  lineHeight: '1.6',
                  color: '#4A5568',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                The art of MY CRAFT lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire.
              </p>
              <p 
                className="mt-6"
                style={{
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#9CA3AF',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}
              >
                — Silvana
              </p>
            </motion.div>
          </motion.div>

          {/* Journey Highlights - Organic Flow */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <h3 
                style={{
                  fontSize: '48px',
                  fontFamily: 'Georgia, serif',
                  color: '#F26B75',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}
              >
                15+
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B7280',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Years of Experience
              </p>
            </div>
            
            <div>
              <h3 
                style={{
                  fontSize: '48px',
                  fontFamily: 'Georgia, serif',
                  color: '#F26B75',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}
              >
                50+
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B7280',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Global Projects
              </p>
            </div>
            
            <div>
              <h3 
                style={{
                  fontSize: '48px',
                  fontFamily: 'Georgia, serif',
                  color: '#F26B75',
                  fontWeight: 300,
                  marginBottom: '8px'
                }}
              >
                3
              </h3>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#6B7280',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                Continents
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Organic Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-32 h-32"
        style={{
          background: 'radial-gradient(circle, rgba(242, 107, 117, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 w-40 h-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 218, 185, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }}
      />
    </section>
  );
};

export default AboutSection;