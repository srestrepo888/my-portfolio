import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
import ImageOptimizer from '@/components/ui/ImageOptimizer';
import { projects, Project } from '@/data/projects';

interface ProjectPageProps {
  project: Project;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Head>
        <title>{project.title} - Silvana Restrepo</title>
      </Head>
      
      <Navigation />
      
      <main className="pt-24">
        {/* Ultra-Luxurious Hero Section - Split Screen Design */}
        <section className="min-h-screen flex flex-col lg:flex-row bg-background-cream">
          {/* Left Side - Sophisticated Content Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 relative z-10"
          >
            {/* Back Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                href="/#projects"
                className="inline-flex items-center gap-3 text-coral hover:gap-5 transition-all duration-500 group"
                style={{ color: '#FF6663' }}
              >
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-xl"
                >
                  ←
                </motion.span>
                <span className="text-body font-light tracking-wide">Back to Projects</span>
              </Link>
            </motion.div>

            {/* Project Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <span 
                className="text-6xl font-light tracking-tighter"
                style={{ 
                  color: '#A8B8D8',
                  fontFamily: 'Playfair Display, serif',
                  opacity: 0.3
                }}
              >
                {String(projects.findIndex(p => p.id === project.id) + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="mb-6"
            >
              <h1 
                className="text-6xl lg:text-7xl font-light leading-tight tracking-tight"
                style={{ 
                  color: '#6B7280',
                  fontFamily: 'Playfair Display, serif',
                  fontStyle: 'italic'
                }}
              >
                {project.title}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p 
                className="text-xl lg:text-2xl font-light leading-relaxed"
                style={{ 
                  color: '#9CA3AF',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                {project.subtitle}
              </p>
            </motion.div>

            {/* Project Details - Elegant Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 mb-8"
            >
              <div className="space-y-2">
                <span 
                  className="text-sm font-light tracking-wider uppercase"
                  style={{ color: '#FF6663' }}
                >
                  Client
                </span>
                <p 
                  className="text-lg font-light"
                  style={{ color: '#6B7280' }}
                >
                  {project.client}
                </p>
              </div>
              <div className="space-y-2">
                <span 
                  className="text-sm font-light tracking-wider uppercase"
                  style={{ color: '#FF6663' }}
                >
                  Year
                </span>
                <p 
                  className="text-lg font-light"
                  style={{ color: '#6B7280' }}
                >
                  {project.year}
                </p>
              </div>
              <div className="space-y-2">
                <span 
                  className="text-sm font-light tracking-wider uppercase"
                  style={{ color: '#FF6663' }}
                >
                  Industry
                </span>
                <p 
                  className="text-lg font-light"
                  style={{ color: '#6B7280' }}
                >
                  {project.industry}
                </p>
              </div>
              <div className="space-y-2">
                <span 
                  className="text-sm font-light tracking-wider uppercase"
                  style={{ color: '#FF6663' }}
                >
                  Location
                </span>
                <p 
                  className="text-lg font-light"
                  style={{ color: '#6B7280' }}
                >
                  {project.location}
                </p>
              </div>
            </motion.div>

            {/* Practices - Elegant Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              {project.practices.map((practice, index) => (
                <motion.span
                  key={practice}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="px-4 py-2 rounded-full border"
                  style={{
                    borderColor: '#E5E7EB',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    color: '#6B7280',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em'
                  }}
                >
                  {practice}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Sophisticated Image Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative overflow-hidden"
          >
            {/* Elegant Image Container */}
            <div className="relative h-full min-h-[60vh] lg:min-h-screen">
              <ImageOptimizer
                src={project.heroImage}
                alt={`${project.title} - ${project.subtitle}`}
                aspectRatio="16/9"
                priority
                quality={95}
                sizes="(max-width: 768px) 100vw, 50vw"
                objectFit="contain"
                style={{
                  filter: 'contrast(1.05) saturate(0.9) brightness(1.02)'
                }}
              />
              
              {/* Sophisticated Overlay Gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 251, 238, 0.1) 0%, rgba(255, 102, 99, 0.05) 50%, rgba(255, 251, 238, 0.2) 100%)'
                }}
              />
              
              {/* Elegant Corner Accent */}
              <div 
                className="absolute top-8 right-8 w-24 h-24"
                style={{
                  background: 'radial-gradient(circle, rgba(255, 102, 99, 0.2), transparent)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Ultra-Sophisticated Project Details */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Left Column - Context & Challenge */}
              <div className="lg:col-span-2 space-y-16">
                {/* Context */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 
                    className="text-4xl font-light mb-8"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic'
                    }}
                  >
                    Context
                  </h2>
                  <p 
                    className="text-xl font-light leading-relaxed"
                    style={{ 
                      color: '#9CA3AF',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    {project.context}
                  </p>
                </motion.div>

                {/* Scope of Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 
                    className="text-4xl font-light mb-8"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic'
                    }}
                  >
                    Scope of the Challenge
                  </h2>
                  <ul className="space-y-6">
                    {project.scope.map((item, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-6 items-start"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                          style={{ backgroundColor: '#FF6663' }}
                        />
                        <p 
                          className="text-lg font-light leading-relaxed"
                          style={{ 
                            color: '#9CA3AF',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {item}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 
                    className="text-4xl font-light mb-8"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic'
                    }}
                  >
                    Impact
                  </h2>
                  <div className="space-y-6">
                    {project.impact.map((item, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-2xl border"
                        style={{
                          borderColor: '#E5E7EB',
                          backgroundColor: 'rgba(255, 251, 238, 0.3)'
                        }}
                      >
                        <p 
                          className="text-lg font-light leading-relaxed"
                          style={{ 
                            color: '#9CA3AF',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Testimonial & Additional Info */}
              <div className="space-y-12">
                {/* Testimonial */}
                {project.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 102, 99, 0.05) 0%, rgba(255, 251, 238, 0.3) 100%)',
                      border: '1px solid rgba(255, 102, 99, 0.1)'
                    }}
                  >
                    <div 
                      className="text-6xl mb-6"
                      style={{ color: '#FF6663', opacity: 0.3 }}
                    >
                      "
                    </div>
                    <p 
                      className="text-xl font-light italic mb-6 leading-relaxed"
                      style={{ 
                        color: '#6B7280',
                        fontFamily: 'Playfair Display, serif'
                      }}
                    >
                      {project.testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-px"
                        style={{ backgroundColor: '#FF6663' }}
                      />
                      <div>
                        <p 
                          className="font-light text-lg"
                          style={{ 
                            color: '#6B7280',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {project.testimonial.author}
                        </p>
                        <p 
                          className="text-sm font-light"
                          style={{ 
                            color: '#9CA3AF',
                            fontFamily: 'Inter, sans-serif'
                          }}
                        >
                          {project.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 
                    className="text-2xl font-light"
                    style={{ 
                      color: '#6B7280',
                      fontFamily: 'Playfair Display, serif',
                      fontStyle: 'italic'
                    }}
                  >
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span 
                        className="text-sm font-light tracking-wider uppercase"
                        style={{ color: '#FF6663' }}
                      >
                        Timeline
                      </span>
                      <span 
                        className="font-light"
                        style={{ color: '#6B7280' }}
                      >
                        6 months
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span 
                        className="text-sm font-light tracking-wider uppercase"
                        style={{ color: '#FF6663' }}
                      >
                        Role
                      </span>
                      <span 
                        className="font-light"
                        style={{ color: '#6B7280' }}
                      >
                        Experience Architect
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span 
                        className="text-sm font-light tracking-wider uppercase"
                        style={{ color: '#FF6663' }}
                      >
                        Team Size
                      </span>
                      <span 
                        className="font-light"
                        style={{ color: '#6B7280' }}
                      >
                        8 members
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Ultra-Sophisticated Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="py-24 bg-background-cream">
            <div className="max-w-7xl mx-auto px-8 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 
                  className="text-5xl font-light mb-6"
                  style={{ 
                    color: '#6B7280',
                    fontFamily: 'Playfair Display, serif',
                    fontStyle: 'italic'
                  }}
                >
                  Project Gallery
                </h2>
                <div 
                  className="w-24 h-px mx-auto"
                  style={{ backgroundColor: '#FF6663' }}
                />
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-3xl"
                    style={{
                      aspectRatio: '4/3',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <ImageOptimizer
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      aspectRatio="4/3"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      objectFit="contain"
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Sophisticated Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 102, 99, 0.1) 0%, rgba(255, 251, 238, 0.2) 100%)'
                      }}
                    />
                    
                    {/* Elegant Corner Accent */}
                    <div 
                      className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: 'radial-gradient(circle, rgba(255, 102, 99, 0.3), transparent)',
                        borderRadius: '50%',
                        filter: 'blur(8px)'
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Ultra-Luxurious Next Project Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Visit Live Site Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={project.webpage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-light tracking-wide transition-all duration-500 group"
                  style={{
                    backgroundColor: '#FF6663',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(255, 102, 99, 0.3)'
                  }}
                >
                  <span>Visit Live Site</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
              
              {/* Next Project */}
              <div className="pt-12 border-t border-gray-100">
                <p 
                  className="text-sm font-light tracking-wider uppercase mb-6"
                  style={{ color: '#9CA3AF' }}
                >
                  Next Project
                </p>
                <Link 
                  href={`/projects/${projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].id}`}
                  className="inline-flex items-center gap-4 text-2xl font-light hover:gap-6 transition-all duration-500 group"
                  style={{ color: '#6B7280' }}
                >
                  <span className="font-light italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].title}
                  </span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-3xl"
                    style={{ color: '#FF6663' }}
                  >
                    →
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.id === params?.id);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
  };
};