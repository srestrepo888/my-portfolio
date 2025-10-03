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
      className="relative section-padding overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 218, 185, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 228, 196, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #FFF8F5 0%, #FFF0E6 50%, #FFE4E4 100%)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 100% 100%'
      }}
    >
      {/* Personal Branding Texture Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 182, 193, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 75% 75%, rgba(255, 218, 185, 0.08) 0%, transparent 25%),
            radial-gradient(circle at 50% 50%, rgba(255, 228, 196, 0.05) 0%, transparent 25%)
          `,
          backgroundSize: '200px 200px, 300px 300px, 150px 150px',
          opacity: 0.3
        }}
      />
      
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
            <h2 
              className="mb-12"
              style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                fontWeight: 600,
                letterSpacing: '0.02em',
                lineHeight: '1.1',
                color: '#1F1F1F',
                fontStyle: 'italic'
              }}
            >
              About Me
            </h2>
            
            <div className="space-y-8">
              <p 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  color: '#4A5568'
                }}
              >
                I believe the most compelling stories begin with <span style={{ color: '#1F1F1F', fontWeight: 600, fontStyle: 'italic' }}>curiosity</span>—a 
                spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
              </p>
              
              <p 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  color: '#4A5568'
                }}
              >
                I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide.
              </p>

              <p 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  color: '#4A5568'
                }}
              >
                Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span style={{ color: '#1F1F1F', fontWeight: 500, fontStyle: 'italic' }}>#human perspective</span>.
              </p>

              <p 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  color: '#4A5568'
                }}
              >
                Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
              </p>

              <p 
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  lineHeight: '1.8',
                  color: '#4A5568'
                }}
              >
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
                <p 
                  style={{
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                    fontFamily: 'Cormorant Garamond, Playfair Display, serif',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    lineHeight: '1.7',
                    color: '#1F1F1F',
                    fontStyle: 'italic'
                  }}
                >
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
                  src="/images/silvana-portrait.jpg"
                  alt="Silvana Restrepo - Portrait"
                  fill
                  className="object-cover object-center"
                  priority
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