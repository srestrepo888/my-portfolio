import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import SectionHeader from '@/components/common/SectionHeader';

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
      className="relative py-12 lg:py-16 overflow-hidden"
      style={{
        backgroundColor: '#FFFBEE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
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
              radial-gradient(ellipse at 20% 30%, rgba(255, 102, 99, 0.05) 0%, transparent 40%),
              radial-gradient(ellipse at 80% 70%, rgba(255, 153, 150, 0.04) 0%, transparent 40%),
              radial-gradient(ellipse at 50% 50%, rgba(255, 251, 238, 0.95) 50%, #FFFBEE 100%)
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
              color: '#FF6663'
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
              background: 'linear-gradient(90deg, transparent, #FF6663, transparent)'
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
            Transforming business vision into human experiences through strategic design
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
            border: '1px solid rgba(255, 102, 99, 0.1)'
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
          background: 'radial-gradient(circle, #FF6663, transparent)',
          filter: 'blur(20px)'
        }}
      />
    </section>
  );
};

export default ServicesSection;