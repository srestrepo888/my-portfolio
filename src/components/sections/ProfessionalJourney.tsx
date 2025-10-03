import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItem {
  period: string;
  company: string;
  role: string;
  description?: string;
  highlight?: boolean;
}

const ProfessionalJourney: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const timeline: TimelineItem[] = [
    {
      period: "2020—2025",
      company: "Globant",
      role: "Business Partner & Experience Architect",
      description: "Orchestrating enterprise-scale digital initiatives for global brands",
      highlight: true
    },
    {
      period: "2019—2020",
      company: "Centre for Fourth Industrial Revolution-WEF",
      role: "Strategic Advisor",
      description: "Developing frameworks connecting technologies with governance approaches"
    },
    {
      period: "2018—2019",
      company: "Designit a WIPRO Company",
      role: "Strategic Design Director",
      description: "Leading regional operations to scale market presence"
    },
    {
      period: "2016—2018",
      company: "Grupo Éxito",
      role: "Marketing Director",
      description: "Transforming retail destinations into experiential ecosystems"
    },
    {
      period: "2013—2016",
      company: "Industrias HACEB",
      role: "Business Intelligence Manager",
      description: "Reengineering market segmentation frameworks"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background-pink to-background-cream">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary-coral text-sm font-medium">03</span>
          <h2 className="text-section-title font-serif text-primary-dark mt-4 mb-6">
            Professional Journey
          </h2>
          <p className="text-body-lg text-primary-gray max-w-3xl mx-auto">
            Some of the hats I have worn over more than 20 years of non-stop continuous upscaling, 
            reinventing, evolving, and reimagining business, brands, and teams.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary-coral/20" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`inline-block ${
                      item.highlight ? 'bg-white shadow-xl' : 'bg-white/50 backdrop-blur-sm'
                    } rounded-card p-6 transition-all duration-300`}
                  >
                    <span className="text-primary-coral text-sm font-medium">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-serif text-primary-dark mt-2">
                      {item.company}
                    </h3>
                    <p className="text-primary-gray font-medium mt-1">
                      {item.role}
                    </p>
                    {item.description && (
                      <p className="text-sm text-primary-gray mt-3">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full ${
                      item.highlight ? 'bg-primary-coral' : 'bg-primary-gray'
                    } border-4 border-background-cream`}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href="https://linkedin.com/in/silvanarestrepo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-coral font-medium hover:gap-4 transition-all duration-300"
          >
            <span>View Full Experience on LinkedIn</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;