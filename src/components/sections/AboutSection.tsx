import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background-pink to-background-cream">
      <div className="container-custom">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-right mb-8"
        >
          <span className="text-primary-coral text-sm font-medium">01</span>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-section-title font-serif text-primary-dark mb-8">
              About me
            </h2>
            
            <div className="space-y-6 text-body-lg text-primary-gray">
              <p>
                I believe the most compelling stories begin with <span className="text-primary-dark font-medium">curiosity</span>—a 
                spark that has carried me across continents blending perspectives from anthropology to 
                business, innovation to experience design.
              </p>
              
              <p>
                At my core, I am an <span className="text-primary-dark font-medium">architect of invisible systems</span>, 
                designing experiences that touch the human soul.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/50 backdrop-blur-sm rounded-card p-6 border-l-4 border-primary-coral"
              >
                <p className="text-body italic text-primary-dark">
                  "The art of MY CRAFT lies in listening to the unspoken, 
                  seeing the invisible, and touching the intangible essence of 
                  human desire."
                </p>
                <p className="text-sm text-primary-gray mt-3">— SILVANA</p>
              </motion.div>

              <p>
                For millennials and influencers, AI-driven experiences 
                enhance self-expression and influence through technology.
              </p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-coral/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-pink/20 rounded-full blur-xl" />
              
              <div className="relative bg-white rounded-[30px] shadow-xl overflow-hidden aspect-[3/4]">
                <div className="w-full h-full bg-gradient-to-b from-background-cream to-background-pink flex items-center justify-center">
                  <p className="text-primary-gray text-center">About Photo Placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;