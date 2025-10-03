import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experienceData = [
    {
      title: "Experience Designer & Business Partner",
      period: "2020—2025",
      company: "Globant, Business Partner & Experience Architect",
      description: "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals. Contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance, and wellness teams, supporting faster value delivery."
    },
    {
      title: "Strategic Design Director",
      period: "2019—2020",
      company: "Centre for Fourth Industrial Revolution-WEF",
      description: "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation."
    },
    {
      title: "Strategic Design Director",
      period: "2018—2019",
      company: "Designit a WIPRO Company",
      description: "I led regional operations to scale market presence and transform business complexity into actionable design solutions."
    },
    {
      title: "Marketing Director",
      period: "2016—2018",
      company: "Grupo Éxito",
      description: "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation."
    },
    {
      title: "Business Intelligence Manager",
      period: "2013—2016",
      company: "Industrias HACEB",
      description: "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies."
    },
    {
      title: "Independent Advisor",
      period: "2012—2016",
      company: "Independent",
      description: "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps."
    },
    {
      title: "Senior Marketing Analyst",
      period: "2002—2011",
      company: "TIGO- Millicom",
      description: "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background-cream to-white">
      <div className="container-custom">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-right mb-8"
        >
          <span className="text-primary-coral text-sm font-medium">03</span>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title font-serif text-primary-dark mb-6">
              My Experience
            </h2>
            <p className="text-body-lg text-primary-gray max-w-3xl mx-auto">
              Some of the hats I have worn over more than 20 years of non-stop, continuous upscaling, reinventing, evolving, and reimagining business, brands, and teams.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  <div className="lg:w-1/3">
                    <h3 className="text-heading font-serif text-primary-dark mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-primary-coral font-medium mb-1">
                      {experience.period}
                    </p>
                    <p className="text-primary-gray font-medium">
                      {experience.company}
                    </p>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-body text-primary-gray leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
