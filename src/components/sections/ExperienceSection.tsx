import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const experienceData = [
    {
      title: "Experience Designer & Business Partner",
      period: "2020—2025",
      company: "Globant, Business Partner & Experience Architect",
      description: "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals. Contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance, and wellness teams, supporting faster value delivery.",
      year: 2020,
      category: "Leadership"
    },
    {
      title: "Strategic Design Director",
      period: "2019—2020",
      company: "Centre for Fourth Industrial Revolution-WEF",
      description: "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation.",
      year: 2019,
      category: "Strategy"
    },
    {
      title: "Strategic Design Director",
      period: "2018—2019",
      company: "Designit a WIPRO Company",
      description: "I led regional operations to scale market presence and transform business complexity into actionable design solutions.",
      year: 2018,
      category: "Strategy"
    },
    {
      title: "Marketing Director",
      period: "2016—2018",
      company: "Grupo Éxito",
      description: "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation.",
      year: 2016,
      category: "Marketing"
    },
    {
      title: "Business Intelligence Manager",
      period: "2013—2016",
      company: "Industrias HACEB",
      description: "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies.",
      year: 2013,
      category: "Analytics"
    },
    {
      title: "Independent Advisor",
      period: "2012—2016",
      company: "Independent",
      description: "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps.",
      year: 2012,
      category: "Consulting"
    },
    {
      title: "Senior Marketing Analyst",
      period: "2002—2011",
      company: "TIGO- Millicom",
      description: "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand.",
      year: 2002,
      category: "Analytics"
    }
  ];

  const categories = Array.from(new Set(experienceData.map(exp => exp.category)));

  return (
    <section 
      id="experience" 
      className="relative section-padding overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 20%, rgba(255, 182, 193, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(255, 218, 185, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #FFF8F5 0%, #FFFFFF 100%)
        `
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-right mb-8"
        >
          <span className="text-accent text-sm font-medium">03</span>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 
              className="mb-8"
              style={{
                fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
                fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                color: '#1F1F1F',
                fontStyle: 'italic'
              }}
            >
              My Experience
            </h2>
            <p 
              className="max-w-4xl mx-auto"
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                fontWeight: 300,
                letterSpacing: '0.02em',
                lineHeight: '1.8',
                color: '#4A5568',
                fontStyle: 'italic'
              }}
            >
              Some of the hats I have worn over more than 20 years of non-stop, continuous upscaling, reinventing, evolving, and reimagining business, brands, and teams.
            </p>
          </motion.div>

          {/* Award-Winning Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-20 flex-shrink-0 mb-8 lg:mb-0">
                    <motion.div
                      className="w-4 h-4 bg-accent rounded-full shadow-lg"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 w-4 h-4 bg-accent/30 rounded-full"
                      animate={{
                        scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                        opacity: hoveredIndex === index ? [0.3, 0.1, 0.3] : 0.3
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                    }`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative group">
                      {/* Card Background */}
                      <div 
                        className="relative p-8 rounded-3xl transition-all duration-500 cursor-pointer"
                        style={{
                          background: hoveredIndex === index 
                            ? 'rgba(255, 255, 255, 0.95)' 
                            : 'rgba(255, 255, 255, 0.7)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 182, 193, 0.2)',
                          boxShadow: hoveredIndex === index 
                            ? '0 25px 50px rgba(0, 0, 0, 0.15)' 
                            : '0 10px 30px rgba(0, 0, 0, 0.08)'
                        }}
                      >
                        {/* Year Badge */}
                        <div className="absolute -top-3 -right-3">
                          <div 
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{
                              background: 'linear-gradient(135deg, #FF5A5A, #FFB3B3)',
                              color: 'white',
                              boxShadow: '0 4px 15px rgba(255, 90, 90, 0.3)'
                            }}
                          >
                            {experience.year}
                          </div>
                        </div>

                        {/* Category Tag */}
                        <div className="mb-4">
                          <span 
                            className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
                            style={{
                              background: 'rgba(255, 182, 193, 0.2)',
                              color: '#FF5A5A'
                            }}
                          >
                            {experience.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-title font-serif text-primary-dark mb-3 group-hover:text-accent transition-colors duration-300">
                          {experience.title}
                        </h3>

                        {/* Company & Period */}
                        <div className="mb-4">
                          <p className="text-accent font-medium text-sm mb-1">
                            {experience.period}
                          </p>
                          <p className="text-primary-gray font-medium text-sm">
                            {experience.company}
                          </p>
                        </div>

                        {/* Description - Hidden by default, revealed on hover */}
                        <AnimatePresence>
                          {hoveredIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-accent/20">
                                <p className="text-body text-primary-gray leading-relaxed">
                                  {experience.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Hover Indicator */}
                        <motion.div
                          className="absolute bottom-4 right-4"
                          animate={{
                            opacity: hoveredIndex === index ? 0 : 1,
                            scale: hoveredIndex === index ? 0.8 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex items-center text-accent/60 text-sm">
                            <span className="mr-2">Hover for details</span>
                            <motion.div
                              animate={{ x: [0, 4, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              →
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-accent/20 rounded-full"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                          opacity: hoveredIndex === index ? [0.2, 0.4, 0.2] : 0.2
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-light/30 rounded-full"
                        animate={{
                          scale: hoveredIndex === index ? [1, 1.3, 1] : 1,
                          opacity: hoveredIndex === index ? [0.3, 0.6, 0.3] : 0.3
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20"
          >
            <div 
              className="inline-block px-8 py-4 rounded-full"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 182, 193, 0.3)'
              }}
            >
              <p className="text-body text-primary-gray">
                <span className="font-medium text-accent">20+ years</span> of continuous evolution
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
