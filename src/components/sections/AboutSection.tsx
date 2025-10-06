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

        {/* Personal Texture Overlay - Ultra-Organic Flow */}
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
        
        {/* Organic Noise Texture Pattern */}
        <div 
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='organic'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' result='turbulence'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23organic)' opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Floating Personal Branding Elements */}
        <motion.div 
          className="absolute inset-0"
          style={{ pointerEvents: 'none' }}
        >
          {/* Floating Brand Lines - Elegant Movement */}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -15, 10, 0],
              rotate: [0, 2, -1, 0],
              opacity: [0.02, 0.08, 0.03, 0.02]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-px"
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
              opacity: [0.03, 0.06, 0.02, 0.03]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute top-1/3 right-1/3 w-80 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255, 218, 185, 0.5), transparent)',
              transform: 'rotate(20deg)'
            }}
          />
          
          <motion.div
            animate={{
              x: [0, 20, -30, 0],
              y: [0, -25, 15, 0],
              rotate: [0, 1, -2, 0],
              opacity: [0.02, 0.05, 0.01, 0.02]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10
            }}
            className="absolute bottom-1/3 left-1/5 w-72 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(242, 107, 117, 0.3), transparent)',
              transform: 'rotate(-25deg)'
            }}
          />

          {/* Floating Geometric Brand Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360, 0],
              opacity: [0.05, 0.15, 0.08, 0.05]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/5 right-1/4 w-16 h-16"
            style={{
              background: 'radial-gradient(circle, rgba(242, 107, 117, 0.1), transparent)',
              borderRadius: '50%',
              filter: 'blur(2px)'
            }}
          />
          
          <motion.div
            animate={{
              scale: [0.8, 1.3, 0.9, 0.8],
              rotate: [0, -90, 180, 0],
              opacity: [0.03, 0.12, 0.06, 0.03]
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
            className="absolute bottom-1/4 right-1/5 w-12 h-12"
            style={{
              background: 'linear-gradient(45deg, rgba(255, 218, 185, 0.2), transparent)',
              transform: 'rotate(45deg)',
              filter: 'blur(1px)'
            }}
          />

          {/* Floating Textural Elements */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
              opacity: [0.02, 0.08, 0.03, 0.02]
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 15
            }}
            className="absolute top-2/3 left-1/3 w-24 h-24"
            style={{
              background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F26B75' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1.5'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px',
              filter: 'blur(0.5px)'
            }}
          />
        </motion.div>
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

      {/* Enhanced Floating Personal Branding Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 10, 0],
          x: [0, 15, -10, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.08, 0.25, 0.12, 0.08]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-32 h-32"
        style={{
          background: 'radial-gradient(circle, rgba(242, 107, 117, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%'
        }}
      />
      
      <motion.div
        animate={{ 
          y: [0, 25, -15, 0],
          x: [0, -20, 12, 0],
          scale: [0.8, 1.2, 0.9, 0.8],
          opacity: [0.06, 0.18, 0.09, 0.06]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-20 left-10 w-40 h-40"
        style={{
          background: 'radial-gradient(circle, rgba(255, 218, 185, 0.12) 0%, transparent 70%)',
          filter: 'blur(50px)',
          borderRadius: '50%'
        }}
      />

      {/* Additional Floating Brand Elements */}
      <motion.div
        animate={{ 
          y: [0, -40, 20, 0],
          x: [0, 25, -15, 0],
          rotate: [0, 180, 360, 0],
          opacity: [0.03, 0.12, 0.06, 0.03]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 7
        }}
        className="absolute top-1/2 left-1/6 w-20 h-20"
        style={{
          background: 'linear-gradient(45deg, rgba(242, 107, 117, 0.1), rgba(255, 218, 185, 0.08))',
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(3px)'
        }}
      />

      <motion.div
        animate={{ 
          y: [0, 35, -20, 0],
          x: [0, -30, 18, 0],
          scale: [1, 0.7, 1.3, 1],
          opacity: [0.04, 0.15, 0.07, 0.04]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 11
        }}
        className="absolute bottom-1/3 right-1/6 w-16 h-16"
        style={{
          background: 'conic-gradient(from 45deg, rgba(242, 107, 117, 0.08), rgba(255, 218, 185, 0.06), rgba(242, 107, 117, 0.08))',
          borderRadius: '50%',
          filter: 'blur(2px)'
        }}
      />

      {/* Floating Textural Brand Patterns */}
      <motion.div
        animate={{ 
          y: [0, -25, 15, 0],
          x: [0, 20, -12, 0],
          rotate: [0, 90, 180, 0],
          opacity: [0.02, 0.08, 0.04, 0.02]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-1/4 right-1/6 w-28 h-28"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F26B75' fill-opacity='0.08'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M20 20c0 11.046 8.954 20 20 20V20H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          filter: 'blur(1px)'
        }}
      />

      <motion.div
        animate={{ 
          y: [0, 30, -18, 0],
          x: [0, -22, 14, 0],
          scale: [0.9, 1.1, 0.8, 0.9],
          opacity: [0.03, 0.1, 0.05, 0.03]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 9
        }}
        className="absolute bottom-1/4 left-1/3 w-24 h-24"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDAB9' fill-opacity='0.1'%3E%3Cpolygon points='15,5 25,15 15,25 5,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px',
          filter: 'blur(1.5px)'
        }}
      />
    </section>
  );
};

export default AboutSection;