import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section 
      id="about" 
      className="relative section-padding overflow-hidden bg-brand-texture"
    >
      {/* Personal Branding Texture Overlay */}
      <div className="absolute inset-0 bg-brand-texture-overlay" />
      
      <div className="container-custom relative z-10">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-right mb-8"
        >
          <span className="text-accent text-sm font-medium">01</span>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[80vh]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            <h2 className="text-display font-serif text-primary-dark mb-8">
              About Me
            </h2>
            
            <div className="space-y-6 text-body text-primary-gray">
              <p>
                I believe the most compelling stories begin with <span className="text-primary-dark font-medium">curiosity</span>—a 
                spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
              </p>
              
              <p>
                I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide.
              </p>

              <p>
                Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span className="text-primary-dark font-medium">#human perspective</span>.
              </p>

              <p>
                Weather leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
              </p>

              <p>
                Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative p-6"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 182, 193, 0.2)',
                  borderRadius: '24px',
                  borderLeft: '4px solid #FF5A5A'
                }}
              >
                <p className="text-body italic text-primary-dark">
                  "The art of MY CRAFT lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire."
                </p>
                <p className="text-small text-primary-gray mt-3">— SILVANA</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Flowing Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] order-first lg:order-last"
          >
            {/* Flowing Background Elements */}
            <div className="absolute inset-0">
              {/* Soft gradient orbs that flow with the image */}
              <div 
                className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, transparent 70%)',
                  filter: 'blur(15px) sm:blur(20px)'
                }}
              />
              <div 
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-32 sm:w-40 h-32 sm:h-40 rounded-full opacity-15"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 218, 185, 0.4) 0%, transparent 70%)',
                  filter: 'blur(20px) sm:blur(25px)'
                }}
              />
              <div 
                className="absolute top-1/2 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 rounded-full opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 228, 196, 0.5) 0%, transparent 70%)',
                  filter: 'blur(10px) sm:blur(15px)'
                }}
              />
            </div>

            {/* Main Portrait Container - No white background, flows with texture */}
            <div className="relative w-full h-full">
              {/* Portrait Image */}
              <div className="flowing-image w-full h-full">
                <Image
                  src="/images/hero-portrait.svg"
                  alt="Silvana Restrepo - Portrait"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-4 sm:w-6 h-4 sm:h-6 bg-accent rounded-full opacity-60"
              />
              <motion.div
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-3 sm:w-4 h-3 sm:h-4 bg-accent-light rounded-full opacity-40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;