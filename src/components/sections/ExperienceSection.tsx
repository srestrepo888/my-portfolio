import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '@/components/common/SectionHeader';

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
      color: "#FF6663",
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
      color: "#FF6663",
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
      color: "#FF6663",
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
      color: "#FF6663",
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
      color: "#FF6663",
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
      color: "#FF6663",
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
      className="relative py-8 lg:py-12 overflow-hidden"
      style={{
        backgroundColor: '#FFFBEE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
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
        {/* Section Header */}
        <SectionHeader
          number="03"
          title="My Experience"
          subtitle="A journey through strategic leadership and innovation, where each role has shaped my understanding of human-centered design and business transformation."
        />

        {/* Elegant Timeline Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedExperience(exp.id)}
              >
                {/* Experience Card */}
                <motion.div
                  className="relative p-8 rounded-3xl border transition-all duration-500 group-hover:scale-105"
                  style={{
                    borderColor: selectedExperience === exp.id ? exp.color : '#E5E7EB',
                    backgroundColor: selectedExperience === exp.id 
                      ? `rgba(255, 102, 99, 0.05)` 
                      : 'rgba(255, 255, 255, 0.8)',
                    boxShadow: selectedExperience === exp.id
                      ? `0 20px 40px rgba(255, 102, 99, 0.15)`
                      : '0 10px 30px rgba(0, 0, 0, 0.05)'
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: '0 20px 40px rgba(255, 102, 99, 0.1)'
                  }}
                >
                  {/* Year Badge */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                    style={{
                      backgroundColor: exp.color,
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 300,
                      fontFamily: 'Playfair Display, serif'
                    }}
                  >
                    {exp.year}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-xl font-light mb-3"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic'
                    }}
                  >
                    {exp.title}
                  </h3>

                  {/* Company */}
                  <p 
                    className="text-lg font-light mb-2"
                    style={{ 
                      color: '#9CA3AF',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {exp.company}
                  </p>

                  {/* Period */}
                  <p 
                    className="text-sm font-light mb-4"
                    style={{ 
                      color: '#FF6663',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {exp.period}
                  </p>

                  {/* Description */}
                  <p 
                    className="text-base font-light leading-relaxed"
                    style={{ 
                      color: '#9CA3AF',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Category Tag */}
                  <div 
                    className="inline-block px-4 py-2 rounded-full mt-4"
                    style={{
                      backgroundColor: `${exp.color}15`,
                      color: exp.color,
                      fontSize: '12px',
                      fontWeight: 300,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {exp.category}
                  </div>

                  {/* Hover Indicator */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: exp.color }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: selectedExperience === exp.id ? 1 : 0,
                      opacity: selectedExperience === exp.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;