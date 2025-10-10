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

  // Experience data will be provided by approved copy document
  const experienceData = [];

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
      className="relative py-6 lg:py-8"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number="03"
          title="My Experience"
          subtitle=""
        />

        {/* Experience content will be provided by approved copy document */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-16">
            <p className="text-lg" style={{ color: '#9CA3AF' }}>
              Experience content will be provided from approved copy document.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;