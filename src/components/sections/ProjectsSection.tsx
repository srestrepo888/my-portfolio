import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { projects } from '@/data/projects';

const MagneticButton = dynamic(() => import('@/components/effects/MagneticButton'), { ssr: false });
const ProgressiveImage = dynamic(() => import('@/components/ui/ProgressiveImage'), { ssr: false });

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2000], [0, -100]);
  const parallaxY = useTransform(scrollY, [0, 1000], [0, 150]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const handleProjectChange = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentProject(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        backgroundColor: '#FDF6F0'
      }}
    >
      {/* Cinematic Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              #FDF6F0 0%, 
              rgba(253, 246, 240, 0.95) 50%, 
              rgba(255, 251, 248, 0.98) 100%)`
          }}
        />
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
          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(3.5rem, 7vw, 5rem)',
              fontFamily: 'Georgia, serif',
              fontWeight: 300,
              letterSpacing: '0.05em',
              lineHeight: '1',
              color: '#F26B75'
            }}
          >
            Selected Work
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto"
            style={{
              width: '80px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #F26B75, transparent)'
            }}
          />
        </motion.div>

        {/* Cinematic Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ 
                opacity: 0,
                rotateY: -10,
                z: -100
              }}
              animate={{ 
                opacity: 1,
                rotateY: 0,
                z: 0
              }}
              exit={{ 
                opacity: 0,
                rotateY: 10,
                z: -100
              }}
              transition={{ 
                duration: 1.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Main Project Display - Cinematic View */}
              <div className="relative rounded-lg overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
                {/* Video/Image Background */}
                <div className="absolute inset-0">
                  <motion.div
                    initial={{ scale: 1.2 }}
                    animate={{ 
                      scale: 1,
                      y: parallaxY
                    }}
                    transition={{ 
                      scale: { duration: 8, ease: "easeOut" },
                      y: { duration: 0 }
                    }}
                    className="relative w-full h-full"
                    style={{ willChange: 'transform' }}
                  >
                    {projects[currentProject].video ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ filter: 'brightness(0.7)' }}
                      >
                        <source src={projects[currentProject].video} type="video/mp4" />
                      </video>
                    ) : (
                      <ProgressiveImage
                        src={projects[currentProject].heroImage}
                        alt={projects[currentProject].title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ filter: 'brightness(0.7)' }}
                        placeholderColor="#FDF6F0"
                      />
                    )}
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to right, 
                        rgba(0, 0, 0, 0.6) 0%, 
                        rgba(0, 0, 0, 0.3) 50%, 
                        transparent 100%)`
                    }}
                  />
                </div>

                {/* Project Content Overlay */}
                <div className="relative z-10 h-full flex items-center px-8 lg:px-16">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        y: 60,
                        x: -30
                      }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        x: 0
                      }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.3,
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                    >
                      {/* Project Number */}
                      <span 
                        style={{
                          fontSize: '14px',
                          fontFamily: 'Inter, sans-serif',
                          color: '#F26B75',
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          fontWeight: 500
                        }}
                      >
                        {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                      </span>

                      {/* Client Name */}
                      <h3 
                        className="mt-4 mb-2"
                        style={{
                          fontSize: '16px',
                          fontFamily: 'Inter, sans-serif',
                          color: 'white',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          fontWeight: 400,
                          opacity: 0.9
                        }}
                      >
                        {projects[currentProject].client}
                      </h3>

                      {/* Project Title */}
                      <h2 
                        className="mb-6"
                        style={{
                          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                          fontFamily: 'Georgia, serif',
                          color: 'white',
                          fontWeight: 300,
                          lineHeight: '1.1',
                          letterSpacing: '0.02em'
                        }}
                      >
                        {projects[currentProject].title}
                      </h2>

                      {/* Project Description */}
                      <p 
                        className="mb-8"
                        style={{
                          fontSize: '18px',
                          fontFamily: 'Inter, sans-serif',
                          color: 'white',
                          lineHeight: '1.6',
                          fontWeight: 300,
                          opacity: 0.9
                        }}
                      >
                        {projects[currentProject].subtitle}
                      </p>

                      {/* Timeline Info */}
                      <div className="flex gap-8 mb-10">
                        <div>
                          <p style={{ fontSize: '12px', color: 'white', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Timeline
                          </p>
                          <p style={{ fontSize: '16px', color: 'white', fontWeight: 400 }}>
                            {projects[currentProject].duration}
                          </p>
                        </div>
                        <div>
                          <p style={{ fontSize: '12px', color: 'white', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Role
                          </p>
                          <p style={{ fontSize: '16px', color: 'white', fontWeight: 400 }}>
                            {projects[currentProject].role}
                          </p>
                        </div>
                      </div>

                      {/* View Project Button */}
                      <MagneticButton>
                        <Link href={`/projects/${projects[currentProject].id}`}>
                          <motion.button 
                            className="px-10 py-4"
                            style={{
                              backgroundColor: '#F26B75',
                              color: 'white',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '13px',
                              letterSpacing: '0.15em',
                              textTransform: 'uppercase',
                              fontWeight: 600,
                              borderRadius: '2px'
                            }}
                            whileHover={{ 
                              backgroundColor: '#E85D67',
                              y: -2
                            }}
                          >
                            View Case Study
                          </motion.button>
                        </Link>
                      </MagneticButton>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Timeline Navigation - Cinematic Progress */}
              <div className="mt-12">
                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleProjectChange(index)}
                      className="flex-1 relative h-1 overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(75, 85, 99, 0.1)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0"
                        initial={{ scaleX: 0 }}
                        animate={{ 
                          scaleX: currentProject === index ? 1 : 0,
                          backgroundColor: currentProject === index ? '#F26B75' : 'transparent'
                        }}
                        transition={{ 
                          duration: currentProject === index && isAutoPlaying ? 6 : 0.3,
                          ease: "linear"
                        }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </button>
                  ))}
                </div>

                {/* Project Titles for Navigation */}
                <div className="flex justify-between mt-4">
                  {projects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => handleProjectChange(index)}
                      className={`text-xs uppercase tracking-wider transition-all ${
                        currentProject === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                      }`}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#6B7280',
                        letterSpacing: '0.1em',
                        fontWeight: 500
                      }}
                    >
                      {project.client}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Grid Preview - Secondary View */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { 
                  duration: 0.4,
                  ease: 'easeOut'
                }
              }}
              className="relative group cursor-pointer"
              onClick={() => handleProjectChange(index)}
            >
              <div 
                className="relative overflow-hidden"
                style={{
                  borderRadius: '2px',
                  aspectRatio: '4/3'
                }}
              >
                <ProgressiveImage
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  placeholderColor="#FDF6F0"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.client}
                  </p>
                  <p className="text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    {project.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;