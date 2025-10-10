import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import SectionHeader from '@/components/common/SectionHeader';

// Neural network components removed - will be replaced with approved copy content

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
      className="relative py-6 lg:py-8"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header - Compact */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span 
              className="text-sm font-light tracking-wider uppercase"
              style={{ color: '#FF6663' }}
            >
              04
            </span>
            <h2 
              className="text-4xl lg:text-5xl font-light mt-2 mb-4"
              style={{
                color: '#6B7280',
                fontFamily: 'Playfair Display, serif',
                fontStyle: 'italic'
              }}
            >
              Services
            </h2>
            <p 
              className="text-base font-light max-w-2xl mx-auto"
              style={{
                color: '#9CA3AF',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Content will be provided from approved copy document.
            </p>
          </motion.div>
        </div>

        {/* Clean Services Grid - No Double Containers */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Services will be provided from approved copy document */}
            <div className="text-center py-16">
              <p className="text-lg" style={{ color: '#9CA3AF' }}>
                Services content will be provided from approved copy document.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;