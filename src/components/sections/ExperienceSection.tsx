import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperienceSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [journeyProgress, setJourneyProgress] = useState(0);

  const pathY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const experienceData = [
    {
      id: 0,
      title: "Experience Architect",
      period: "2020—Present",
      company: "Globant",
      description: "Leading digital transformation initiatives for global enterprises",
      year: 2020,
      category: "Leadership",
      color: "#FF5A5A",
      position: { x: 85, y: 20 }
    },
    {
      id: 1,
      title: "Strategic Design Director",
      period: "2019—2020",
      company: "Centre for Fourth Industrial Revolution",
      description: "Developing frameworks for technology governance",
      year: 2019,
      category: "Strategy",
      color: "#FF5A5A",
      position: { x: 70, y: 35 }
    },
    {
      id: 2,
      title: "Strategic Design Director",
      period: "2018—2019",
      company: "Designit (WIPRO)",
      description: "Scaling regional operations and market presence",
      year: 2018,
      category: "Strategy",
      color: "#FF5A5A",
      position: { x: 55, y: 45 }
    },
    {
      id: 3,
      title: "Marketing Director",
      period: "2016—2018",
      company: "Grupo Éxito",
      description: "Transforming retail through experiential design",
      year: 2016,
      category: "Marketing",
      color: "#FF5A5A",
      position: { x: 40, y: 55 }
    },
    {
      id: 4,
      title: "Business Intelligence Manager",
      period: "2013—2016",
      company: "Industrias HACEB",
      description: "Optimizing market segmentation strategies",
      year: 2013,
      category: "Analytics",
      color: "#FF5A5A",
      position: { x: 30, y: 70 }
    },
    {
      id: 5,
      title: "Senior Marketing Analyst",
      period: "2002—2011",
      company: "TIGO-Millicom",
      description: "Supporting corporate expansion and M&A activities",
      year: 2002,
      category: "Analytics",
      color: "#FF5A5A",
      position: { x: 15, y: 85 }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setJourneyProgress(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ backgroundColor: '#FDF6F0' }}
    >
      {/* Journey Path Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: pathY }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M 10,90 Q 30,70 40,55 T 70,35 T 85,20"
            stroke="url(#gradient)"
            strokeWidth="0.3"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5A5A" />
              <stop offset="20%" stopColor="#FF5A5A" />
              <stop offset="40%" stopColor="#FF5A5A" />
              <stop offset="60%" stopColor="#FF5A5A" />
              <stop offset="80%" stopColor="#FF5A5A" />
              <stop offset="100%" stopColor="#FF5A5A" />
            </linearGradient>
          </defs>
          
          {/* Moving particle along path */}
          <motion.circle
            r="0.5"
            fill="#FF5A5A"
            opacity="0.6"
            animate={{
              offsetDistance: `${journeyProgress}%`
            }}
            style={{
              offsetPath: `path('M 10,90 Q 30,70 40,55 T 70,35 T 85,20')`
            }}
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span 
            className="block mb-8"
            style={{
              fontSize: '120px',
              fontFamily: 'Georgia, serif',
              color: '#E5E7EB',
              fontWeight: 100,
              opacity: 0.3
            }}
          >
            03
          </span>
          
          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 5rem)',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600,
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              lineHeight: '1',
              color: '#FF5A5A'
            }}
          >
            My Experience
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-8"
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #FF5A5A, transparent)'
            }}
          />
          
          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.02em',
              lineHeight: '1.8',
              color: '#4A5568'
            }}
          >
            A journey through strategic design and business transformation
          </p>
        </motion.div>

        {/* Interactive Journey Map */}
        <div className="relative h-[600px]">
          {/* Experience Points */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="absolute cursor-pointer"
              style={{
                left: `${exp.position.x}%`,
                top: `${exp.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setSelectedExperience(exp.id)}
              onMouseLeave={() => setSelectedExperience(null)}
            >
              {/* Experience Node */}
              <motion.div
                className="relative"
                animate={{
                  scale: selectedExperience === exp.id ? 1.3 : 1,
                  boxShadow: selectedExperience === exp.id 
                    ? `0 0 40px ${exp.color}60` 
                    : `0 0 20px ${exp.color}30`
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${exp.color}30, white)`,
                    border: `2px solid ${exp.color}50`
                  }}
                >
                  {/* Year */}
                  <span 
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Georgia, serif',
                      color: exp.color,
                      fontWeight: 500
                    }}
                  >
                    {exp.year}
                  </span>
                  
                  {/* Orbiting dot */}
                  <motion.div
                    className="absolute"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: exp.color,
                      borderRadius: '50%'
                    }}
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    initial={{ x: 30 }}
                  />
                </div>

                {/* Company Label */}
                <div 
                  className="absolute whitespace-nowrap"
                  style={{
                    top: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  <p
                    style={{
                      fontSize: '12px',
                      fontFamily: 'Lato, sans-serif',
                      color: '#4A5568',
                      textAlign: 'center',
                      fontWeight: 500
                    }}
                  >
                    {exp.company}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Experience Detail Panel */}
          <AnimatePresence>
            {selectedExperience !== null && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-8 rounded-lg shadow-2xl"
                style={{
                  width: '400px',
                  maxWidth: '90vw',
                  border: `2px solid ${experienceData[selectedExperience].color}20`
                }}
              >
                <div 
                  className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-l-2 border-t-2 rotate-45"
                  style={{
                    borderColor: `${experienceData[selectedExperience].color}20`
                  }}
                />
                
                <span 
                  style={{
                    fontSize: '12px',
                    fontFamily: 'Lato, sans-serif',
                    color: '#FF5A5A',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600
                  }}
                >
                  {experienceData[selectedExperience].period}
                </span>
                
                <h3
                  className="mt-2 mb-3"
                  style={{
                    fontSize: '24px',
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#1F1F1F',
                    fontWeight: 400
                  }}
                >
                  {experienceData[selectedExperience].title}
                </h3>
                
                <p
                  className="mb-3"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Lato, sans-serif',
                    color: '#FF5A5A',
                    fontWeight: 500
                  }}
                >
                  {experienceData[selectedExperience].company}
                </p>
                
                <p
                  style={{
                    fontSize: '14px',
                    fontFamily: 'Lato, sans-serif',
                    color: '#4A5568',
                    lineHeight: '1.6'
                  }}
                >
                  {experienceData[selectedExperience].description}
                </p>
                
                <div 
                  className="mt-4 inline-block px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${experienceData[selectedExperience].color}10`,
                    color: experienceData[selectedExperience].color,
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500
                  }}
                >
                  {experienceData[selectedExperience].category}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;