import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import ImageOptimizer from '@/components/ui/ImageOptimizer';
import { projects } from '@/data/projects';

const ProjectsSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedFilter, setSelectedFilter] = useState('ALL WORK');
  const [currentProject, setCurrentProject] = useState(0);

  const filters = [
    'ALL WORK',
    'EXPERIENCE DESIGN',
    'PRODUCT STRATEGY',
    'SERVICE DESIGN',
    'USER RESEARCH',
    'DESIGN OPS',
    'DIGITAL TRANSFORMATION'
  ];

  const filteredProjects = selectedFilter === 'ALL WORK' 
    ? projects 
    : projects.filter(project => 
        project.practices.some(practice => 
          practice.toUpperCase() === selectedFilter
        )
      );

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background-cream to-background-pink">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title font-serif text-primary-dark mb-4">
            Projects
          </h2>
          <p className="text-body-lg text-primary-gray">
            A selection of strategic consulting projects across various industries.
          </p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setCurrentProject(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-primary-coral text-white'
                  : 'bg-white text-primary-gray hover:bg-primary-coral/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 && (
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Image */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-[30px] overflow-hidden shadow-2xl aspect-[4/3] bg-white">
                    <ImageOptimizer
                      src={filteredProjects[currentProject].heroImage}
                      alt={`${filteredProjects[currentProject].title} project showcase`}
                      aspectRatio="4/3"
                      priority={currentProject === 0}
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                    {/* Project Logo/Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-primary-dark">
                        {filteredProjects[currentProject].client}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-subsection font-serif text-primary-dark mb-4">
                      {filteredProjects[currentProject].title}
                    </h3>
                    <p className="text-body-lg text-primary-gray mb-6">
                      {filteredProjects[currentProject].subtitle}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6 text-sm">
                      <span className="text-primary-coral">{filteredProjects[currentProject].year}</span>
                      <span className="text-primary-gray">•</span>
                      <span className="text-primary-gray">{filteredProjects[currentProject].client}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {filteredProjects[currentProject].practices.map((practice) => (
                        <span
                          key={practice}
                          className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm text-primary-dark"
                        >
                          {practice}
                        </span>
                      ))}
                    </div>

                    <p className="text-body text-primary-gray mb-8 line-clamp-3">
                      {filteredProjects[currentProject].context}
                    </p>

                    <Link
                      href={`/projects/${filteredProjects[currentProject].id}`}
                      className="inline-flex items-center gap-2 text-primary-coral font-medium hover:gap-4 transition-all duration-300"
                    >
                      <span>Explore Project</span>
                      <span>→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full lg:-translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <span className="text-primary-dark">←</span>
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full lg:translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
              >
                <span className="text-primary-dark">→</span>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`dot-indicator ${index === currentProject ? 'active' : ''}`}
              />
            ))}
          </div>
        )}

        {/* View Live Site Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="btn-secondary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;