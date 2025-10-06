import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

const ServiceConstellation = dynamic(() => import('@/components/effects/ServiceConstellation'), { ssr: false });

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [1500, 2500], [0, -80]);

  return (
    <section 
      id="services" 
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        backgroundColor: '#FDF6F0'
      }}
    >
      {/* Organic Background Texture */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(242, 107, 117, 0.05) 0%, transparent 40%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 218, 185, 0.04) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 50%, rgba(253, 246, 240, 0.95) 50%, #FDF6F0 100%)
            `
          }}
        />
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span 
            className="block mb-8"
            style={{
              fontSize: '120px',
              fontFamily: 'Georgia, serif',
              color: '#E5E7EB',
              fontWeight: 100,
              opacity: 0.3
            }}
          >
            02
          </span>
          
          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 5rem)',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600,
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              lineHeight: '1',
              color: '#FF5A5A'
            }}
          >
            Architectural Expertise
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-8"
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #FF5A5A, transparent)'
            }}
          />
          
          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: '1.8',
              color: '#4A5568'
            }}
          >
            Strategic design solutions that transform business vision into human experiences
          </p>
        </motion.div>

        {/* Interactive Service Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative"
          style={{
            height: '600px',
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(242, 107, 117, 0.1)'
          }}
        >
          <ServiceConstellation />
          
          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 0.6 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <p
              style={{
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif',
                color: '#9CA3AF',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Hover to explore • Click for details
            </p>
          </motion.div>
        </motion.div>

        {/* Service Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 
            className="mb-8"
            style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 400,
              color: '#4A5568',
              fontStyle: 'italic'
            }}
          >
            "Each service interconnects to create a unified ecosystem of innovation"
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="mb-4"
                style={{
                  fontSize: '48px',
                  fontFamily: 'Cormorant Garamond, serif',
                  color: '#FF5A5A',
                  fontWeight: 300
                }}
              >
                ✦
              </div>
              <h4 
                style={{
                  fontSize: '18px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}
              >
                Human-Centered
              </h4>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                Every solution begins with understanding human needs and desires
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="mb-4"
                style={{
                  fontSize: '48px',
                  fontFamily: 'Cormorant Garamond, serif',
                  color: '#FF5A5A',
                  fontWeight: 300
                }}
              >
                ◈
              </div>
              <h4 
                style={{
                  fontSize: '18px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}
              >
                Systems Thinking
              </h4>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                Orchestrating complex ecosystems into seamless experiences
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="mb-4"
                style={{
                  fontSize: '48px',
                  fontFamily: 'Cormorant Garamond, serif',
                  color: '#FF5A5A',
                  fontWeight: 300
                }}
              >
                ◆
              </div>
              <h4 
                style={{
                  fontSize: '18px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}
              >
                Strategic Innovation
              </h4>
              <p 
                style={{
                  fontSize: '14px',
                  fontFamily: 'Lato, sans-serif',
                  color: '#4A5568',
                  lineHeight: '1.6'
                }}
              >
                Transforming vision into measurable impact and growth
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <h3 
              style={{
                fontSize: '36px',
                fontFamily: 'Cormorant Garamond, serif',
                color: '#FF5A5A',
                fontWeight: 300,
                marginBottom: '4px'
              }}
            >
              31K+
            </h3>
            <p 
              style={{
                fontSize: '12px',
                fontFamily: 'Lato, sans-serif',
                color: '#4A5568',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Developers Empowered
            </p>
          </div>
          
          <div className="text-center">
            <h3 
              style={{
                fontSize: '36px',
                fontFamily: 'Cormorant Garamond, serif',
                color: '#FF5A5A',
                fontWeight: 300,
                marginBottom: '4px'
              }}
            >
              26%
            </h3>
            <p 
              style={{
                fontSize: '12px',
                fontFamily: 'Lato, sans-serif',
                color: '#4A5568',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Sales Growth
            </p>
          </div>
          
          <div className="text-center">
            <h3 
              style={{
                fontSize: '36px',
                fontFamily: 'Cormorant Garamond, serif',
                color: '#FF5A5A',
                fontWeight: 300,
                marginBottom: '4px'
              }}
            >
              50+
            </h3>
            <p 
              style={{
                fontSize: '12px',
                fontFamily: 'Lato, sans-serif',
                color: '#4A5568',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Global Brands
            </p>
          </div>
          
          <div className="text-center">
            <h3 
              style={{
                fontSize: '36px',
                fontFamily: 'Cormorant Garamond, serif',
                color: '#FF5A5A',
                fontWeight: 300,
                marginBottom: '4px'
              }}
            >
              100%
            </h3>
            <p 
              style={{
                fontSize: '12px',
                fontFamily: 'Lato, sans-serif',
                color: '#4A5568',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Human-Centered
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-10 w-20 h-20 opacity-10"
        style={{
          background: 'radial-gradient(circle, #FF5A5A, transparent)',
          filter: 'blur(20px)'
        }}
      />
    </section>
  );
};

export default ServicesSection;