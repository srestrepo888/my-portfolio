import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      number: "1",
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market reach in half the time",
      description: "Strategic Capability: Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
      proof: "Proven Excellence: Augoor platform development—31,000+ developers, transforming static repositories into intelligent knowledge systems",
      target: "For projects that demand: Speed to market without sacrificing strategic depth."
    },
    {
      number: "2",
      title: "Experience Orchestration",
      subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
      description: "Strategic Capability: Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
      proof: "Proven Excellence: Theme Park- Multiple Channels-One unified experience language",
      target: "For projects that demand: Coherent brand experiences that scale without losing soul. Global reach with local resonance."
    },
    {
      number: "3",
      title: "Intelligent Operations Architecture",
      subtitle: "Building AI-augmented teams that outperform traditional structures",
      description: "Strategic Capability: Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
      proof: "Proven Excellence: Globant X initiatives—AI-human collaboration frameworks deployed across 31,000 team members",
      target: "For Leaders Who Demand: Operations that think, adapt, and evolve. Intelligence is embedded in every process."
    },
    {
      number: "4",
      title: "Transformation Foundations",
      subtitle: "Engineering organizational evolution through scalable design foundations",
      description: "Strategic Capability: Design systems become organizational DNA. Every component strengthens the whole. Every decision accelerates the next. I collaborate to create modular, scalable frameworks —turning organizational complexity into competitive advantage.",
      proof: "Proven Excellence: Kayanee wellness platform—Saudi Arabia's first integrated phygital ecosystem.",
      target: "For teams that demand: Transformation that compounds. Every change strengthens the foundation for the next leap."
    },
    {
      number: "5",
      title: "Strategic Innovation Consulting",
      subtitle: "Converting market disruption into systematic advantage",
      description: "Strategic Capability: Navigate complexity with frameworks that transform uncertainty into opportunity. I blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
      proof: "Proven Excellence: Centre for Fourth Industrial Revolution—governance frameworks adopted across global affiliate network",
      target: "For Leaders Who Demand: Innovation with precision. Strategies that move from boardroom to market with velocity."
    },
    {
      number: "6",
      title: "Customer Intelligence Platforms",
      subtitle: "Turning customer behavior into a competitive advantage",
      description: "Strategic Capability: Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
      proof: "Proven Excellence: 32 retail destinations achieving 26% sales growth through behavior-driven experience design",
      target: "For brands that demand: Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-background-cream">
      <div className="container-custom">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-right mb-8"
        >
          <span className="text-primary-coral text-sm font-medium">04</span>
        </motion.div>

        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-section-title font-serif text-primary-dark mb-6">
              Services
            </h2>
            <p className="text-body-lg text-primary-gray max-w-3xl mx-auto">
              Meticulously architected solutions addressing demanding market realities and evolving client needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-card p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-coral rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {service.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading font-serif text-primary-dark mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary-coral font-medium text-lg">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-body text-primary-gray leading-relaxed">
                    <span className="font-medium text-primary-dark">Strategic Capability:</span> {service.description}
                  </p>
                  
                  <div className="bg-background-cream rounded-lg p-4">
                    <p className="text-body text-primary-gray">
                      <span className="font-medium text-primary-dark">Proven Excellence:</span> {service.proof}
                    </p>
                  </div>
                  
                  <div className="bg-primary-coral/5 rounded-lg p-4 border-l-4 border-primary-coral">
                    <p className="text-body text-primary-dark font-medium">
                      {service.target}
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

export default ServicesSection;
