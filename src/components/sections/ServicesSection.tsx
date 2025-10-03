import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market reach in half the time",
      description: "Transform product visions into market reality through AI-powered rapid prototyping and validation.",
      highlight: "31,000+ developers",
      icon: "innovation"
    },
    {
      id: 2,
      title: "Experience Orchestration",
      subtitle: "Harmonizing touchpoints into one resonant brand voice",
      description: "Create unified experience architectures where daily interactions feel like one seamless conversation.",
      highlight: "Multi-channel unity",
      icon: "orchestration"
    },
    {
      id: 3,
      title: "Intelligent Operations",
      subtitle: "Building AI-augmented teams that outperform traditional structures",
      description: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence.",
      highlight: "Self-optimizing",
      icon: "intelligence"
    },
    {
      id: 4,
      title: "Transformation Foundations",
      subtitle: "Engineering organizational evolution through scalable design",
      description: "Create modular, scalable frameworks that turn organizational complexity into competitive advantage.",
      highlight: "Saudi Arabia's first",
      icon: "transformation"
    },
    {
      id: 5,
      title: "Strategic Innovation",
      subtitle: "Converting market disruption into systematic advantage",
      description: "Navigate complexity with frameworks that transform uncertainty into opportunity.",
      highlight: "Global frameworks",
      icon: "strategy"
    },
    {
      id: 6,
      title: "Customer Intelligence",
      subtitle: "Turning customer behavior into competitive advantage",
      description: "Architect intelligence systems that anticipate behavior and create self-improving experiences.",
      highlight: "26% sales growth",
      icon: "customer"
    }
  ];

  // Life-like animated icon components
  const InnovationIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          rotate: isHovered ? [0, 5, -5, 0] : 0
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute inset-2 rounded-md bg-gradient-to-br from-accent to-accent-light"
        animate={{
          scale: isHovered ? [1, 0.9, 1] : 1,
          opacity: isHovered ? [0.8, 1, 0.8] : 0.8
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
        animate={{
          y: isHovered ? [0, -8, 0] : 0,
          scale: isHovered ? [1, 1.2, 1] : 1
        }}
        transition={{ duration: 1.8, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full"
        animate={{
          x: isHovered ? [0, 6, 0] : 0,
          y: isHovered ? [0, 6, 0] : 0
        }}
        transition={{ duration: 2.2, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const OrchestrationIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? [0, 360] : 0
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      />
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-1 h-8 bg-accent rounded-full origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${angle}deg)` }}
          animate={{
            scaleY: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.6, 1, 0.6] : 0.6
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, delay: i * 0.3 }}
        />
      ))}
      <motion.div
        className="absolute top-1/2 left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const IntelligenceIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute inset-2 rounded-md bg-gradient-to-br from-accent to-accent-light"
        animate={{
          opacity: isHovered ? [0.7, 1, 0.7] : 0.7
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${20 + (i % 2) * 40}%`,
            left: `${20 + Math.floor(i / 2) * 40}%`
          }}
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            opacity: isHovered ? [0.5, 1, 0.5] : 0.5
          }}
          transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, delay: i * 0.2 }}
        />
      ))}
      <motion.div
        className="absolute inset-0 border border-white/30 rounded-md"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1,
          opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3
        }}
        transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const TransformationIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.15, 1] : 1,
          rotate: isHovered ? [0, 180, 360] : 0
        }}
        transition={{ duration: 4, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute inset-2 rounded-md bg-gradient-to-br from-accent to-accent-light"
        animate={{
          scale: isHovered ? [1, 0.8, 1] : 1
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          y: isHovered ? [0, -6, 6, 0] : 0,
          x: isHovered ? [0, 6, -6, 0] : 0
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const StrategyIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.1, 1] : 1
        }}
        transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute inset-2 rounded-md bg-gradient-to-br from-accent to-accent-light"
        animate={{
          opacity: isHovered ? [0.6, 1, 0.6] : 0.6
        }}
        transition={{ duration: 1.8, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-0 h-0 border-l-4 border-r-4 border-b-6 border-transparent border-b-white transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: isHovered ? [0, 360] : 0,
          scale: isHovered ? [1, 1.2, 1] : 1
        }}
        transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const CustomerIcon = ({ isHovered }: { isHovered: boolean }) => (
    <div className="relative w-16 h-16">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent-light/30"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-accent to-accent-light"
        animate={{
          scale: isHovered ? [1, 0.9, 1] : 1,
          opacity: isHovered ? [0.7, 1, 0.7] : 0.7
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          y: isHovered ? [0, -2, 0] : 0
        }}
        transition={{ duration: 1.8, repeat: isHovered ? Infinity : 0 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent rounded-full transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: isHovered ? [0, 3, -3, 0] : 0,
          y: isHovered ? [0, 3, -3, 0] : 0
        }}
        transition={{ duration: 2.2, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );

  const getIcon = (iconType: string, isHovered: boolean) => {
    switch (iconType) {
      case 'innovation': return <InnovationIcon isHovered={isHovered} />;
      case 'orchestration': return <OrchestrationIcon isHovered={isHovered} />;
      case 'intelligence': return <IntelligenceIcon isHovered={isHovered} />;
      case 'transformation': return <TransformationIcon isHovered={isHovered} />;
      case 'strategy': return <StrategyIcon isHovered={isHovered} />;
      case 'customer': return <CustomerIcon isHovered={isHovered} />;
      default: return <InnovationIcon isHovered={isHovered} />;
    }
  };

  return (
    <section 
      id="services" 
      className="relative section-padding overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 10%, rgba(255, 182, 193, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 90%, rgba(255, 218, 185, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #FFFFFF 0%, #FFF8F5 100%)
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
          <span className="text-accent text-sm font-medium">04</span>
        </motion.div>

        <div ref={ref} className="max-w-7xl mx-auto">
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
              Architectural Expertise
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
              Explore each dimension of architectural excellence through <em style={{ color: '#1F1F1F', fontWeight: 500 }}>sophisticated interactive discovery</em>.
            </p>
          </motion.div>

          {/* Award-Winning Service Cards */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <motion.div
                  className="relative h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Card Background */}
                  <div 
                    className="relative h-full p-8 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden"
                    style={{
                      background: hoveredService === service.id 
                        ? 'rgba(255, 255, 255, 0.95)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 182, 193, 0.2)',
                      boxShadow: hoveredService === service.id 
                        ? '0 25px 50px rgba(0, 0, 0, 0.15)' 
                        : '0 10px 30px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {/* Animated Icon */}
                    <div className="mb-6 flex justify-center">
                      {getIcon(service.icon, hoveredService === service.id)}
                    </div>

                    {/* Service Number */}
                    <div className="absolute top-4 right-4">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #FF5A5A, #FFB3B3)',
                          color: 'white'
                        }}
                      >
                        {service.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-title font-serif text-primary-dark mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-accent font-medium text-sm mb-4">
                        {service.subtitle}
                      </p>

                      <p className="text-body text-primary-gray leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Highlight Badge */}
                      <div 
                        className="inline-block px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                          background: 'rgba(255, 182, 193, 0.2)',
                          color: '#FF5A5A'
                        }}
                      >
                        {service.highlight}
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4"
                      animate={{
                        opacity: hoveredService === service.id ? 0 : 1,
                        scale: hoveredService === service.id ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center text-accent/60 text-sm">
                        <span className="mr-2">Explore</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full"
                      animate={{
                        scale: hoveredService === service.id ? [1, 1.3, 1] : 1,
                        opacity: hoveredService === service.id ? [0.2, 0.5, 0.2] : 0.2
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent-light/30 rounded-full"
                      animate={{
                        scale: hoveredService === service.id ? [1, 1.4, 1] : 1,
                        opacity: hoveredService === service.id ? [0.3, 0.6, 0.3] : 0.3
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
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
                <span className="font-medium text-accent">6 core capabilities</span> for architectural excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
