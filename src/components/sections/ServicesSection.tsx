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
        {/* Section Header */}
        <SectionHeader
          number="04"
          title="Architectural Expertise"
          subtitle="My services are designed to transform complex challenges into elegant, human-centered solutions that drive business growth and enhance user engagement."
        />

        {/* Sophisticated Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1: Strategic Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#FF6663',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Strategic Design
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Crafting comprehensive design strategies that align business objectives with user needs, creating sustainable competitive advantages.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255, 102, 99, 0.1)',
                    color: '#FF6663',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Strategy & Planning
                </div>
              </div>
            </motion.div>

            {/* Service 2: Experience Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#8FBC8F',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Experience Architecture
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Designing seamless, intuitive experiences that connect users with products and services through thoughtful interaction design.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(143, 188, 143, 0.1)',
                    color: '#8FBC8F',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  UX & Interaction
                </div>
              </div>
            </motion.div>

            {/* Service 3: Digital Transformation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#B19CD9',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Digital Transformation
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Guiding organizations through digital evolution, implementing technology solutions that enhance operational efficiency and user satisfaction.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(177, 156, 217, 0.1)',
                    color: '#B19CD9',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Technology & Innovation
                </div>
              </div>
            </motion.div>

            {/* Service 4: User Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#FFB347',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  User Research
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Uncovering deep insights about user behavior, needs, and motivations to inform data-driven design decisions and product strategies.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255, 179, 71, 0.1)',
                    color: '#FFB347',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Research & Insights
                </div>
              </div>
            </motion.div>

            {/* Service 5: Design Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#708090',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Design Systems
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Creating scalable design systems that ensure consistency, efficiency, and maintainability across all digital touchpoints.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(112, 128, 144, 0.1)',
                    color: '#708090',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Systems & Standards
                </div>
              </div>
            </motion.div>

            {/* Service 6: Innovation Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div 
                className="p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                style={{
                  borderColor: '#E5E7EB',
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{
                    backgroundColor: '#FF6663',
                    color: 'white'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 1 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                </div>

                <h3 
                  className="text-2xl font-light mb-4"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Innovation Consulting
                </h3>

                <p 
                  className="text-base font-light leading-relaxed mb-6"
                  style={{ 
                    color: '#9CA3AF',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Providing strategic guidance and creative solutions to help organizations navigate complex challenges and drive meaningful innovation.
                </p>

                <div 
                  className="inline-block px-4 py-2 rounded-full"
                  style={{
                    backgroundColor: 'rgba(255, 102, 99, 0.1)',
                    color: '#FF6663',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Strategy & Innovation
                </div>
              </div>
            </motion.div>
          </div>
        </div>

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