import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';
import SectionHeader from '@/components/common/SectionHeader';

const UltraLuxuryNeuralNetwork = dynamic(() => import('@/components/effects/UltraLuxuryNeuralNetwork'), { ssr: false });

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
      className="relative py-8 lg:py-12 overflow-hidden"
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
        {/* Section Header */}
        <SectionHeader
          number="04"
          title="Architectural Expertise"
          subtitle="My services are designed to transform complex challenges into elegant, human-centered solutions that drive business growth and enhance user engagement."
        />

        {/* Obsidian Neural Network Visualization */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <UltraLuxuryNeuralNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;