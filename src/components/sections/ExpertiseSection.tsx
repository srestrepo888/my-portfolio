import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  icon: string;
}

const ExpertiseSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedExpertise, setSelectedExpertise] = useState(0);

  const expertiseItems: ExpertiseItem[] = [
    {
      id: 'operations',
      title: 'Intelligent Operations Architecture',
      subtitle: 'Building AI-augmented teams that outperform traditional structures',
      description: 'Design agentc systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.',
      capabilities: ['AI-Human Collaboration', 'Operations Design', 'Intelligence Systems'],
      icon: '🎯'
    },
    {
      id: 'product',
      title: 'Accelerated Product Innovation',
      subtitle: 'From concept to market reach in half the time',
      description: 'Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.',
      capabilities: ['Rapid Prototyping', 'Market Validation', 'Innovation Sprints'],
      icon: '🚀'
    },
    {
      id: 'experience',
      title: 'Experience Orchestration',
      subtitle: 'Harmonizing thousands of touchpoints into one resonant brand voice',
      description: 'Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.',
      capabilities: ['Omnichannel Design', 'Brand Experience', 'Systems Architecture'],
      icon: '✨'
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background-cream to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary-coral text-sm font-medium">05</span>
          <h2 className="text-section-title font-serif text-primary-dark mt-4 mb-6">
            Architectural<span className="text-gradient italic">In</span>Expertise
          </h2>
          <p className="text-body-lg text-primary-gray max-w-3xl mx-auto">
            Explore each dimension of architectural excellence through <span className="text-primary-dark font-medium">enhanced interactive fluency</span>
          </p>
        </motion.div>

        {/* Expertise Cards Container */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12"
          >
            {/* Expertise Selector */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {expertiseItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedExpertise(index)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedExpertise === index
                      ? 'bg-primary-coral text-white shadow-button'
                      : 'bg-background-cream text-primary-gray hover:bg-primary-coral/10'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Selected Expertise Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExpertise}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-coral/20 to-primary-pink/20 rounded-2xl flex items-center justify-center text-2xl">
                    {expertiseItems[selectedExpertise].icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-primary-dark mb-2">
                      {expertiseItems[selectedExpertise].title}
                    </h3>
                    <p className="text-primary-coral font-medium">
                      {expertiseItems[selectedExpertise].subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-body text-primary-gray leading-relaxed">
                  {expertiseItems[selectedExpertise].description}
                </p>

                {/* Capabilities Tags */}
                <div className="flex flex-wrap gap-3">
                  {expertiseItems[selectedExpertise].capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="px-4 py-2 bg-background-cream rounded-full text-sm text-primary-dark"
                    >
                      {capability}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {expertiseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedExpertise(index)}
                className={`dot-indicator ${index === selectedExpertise ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section - Payne Auto Application */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white rounded-card p-8 shadow-xl">
            <h3 className="text-xl font-serif text-primary-dark mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-body text-primary-gray mb-6 max-w-md">
              "Transforming business vision into human experiences—where strategic design 
              meets operational excellence and technological possibility."
            </p>
            <button className="btn-primary">
              Let's Work Together →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;