import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';
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
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background-cream to-background-pink">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link 
                href="/#projects"
                className="inline-flex items-center gap-2 text-primary-coral mb-6 hover:gap-4 transition-all duration-300"
              >
                <span>←</span>
                <span>Back to Projects</span>
              </Link>
              
              <h1 className="text-hero font-serif text-primary-dark mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-primary-gray mb-8">
                {project.subtitle}
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <span className="text-primary-coral">Client:</span>
                  <span className="text-primary-dark font-medium">{project.client}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary-coral">Year:</span>
                  <span className="text-primary-dark font-medium">{project.year}</span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-primary-coral">Industry:</span>
                  <span className="text-primary-dark font-medium">{project.industry}</span>
                </span>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {project.practices.map((practice) => (
                  <span
                    key={practice}
                    className="px-4 py-2 bg-white rounded-full text-sm text-primary-dark"
                  >
                    {practice}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-2xl aspect-[16/9]"
            >
              <img
                src={project.heroImage}
                alt={`${project.title} - ${project.subtitle}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-gradient-to-b from-white to-background-cream">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-16">
              {/* Context */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-subsection font-serif text-primary-dark mb-6">Context</h2>
                <p className="text-body-lg text-primary-gray leading-relaxed">
                  {project.context}
                </p>
              </motion.div>

              {/* Scope of Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-subsection font-serif text-primary-dark mb-6">
                  Scope of the Challenge
                </h2>
                <ul className="space-y-4">
                  {project.scope.map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="text-primary-coral mt-1">•</span>
                      <p className="text-body text-primary-gray flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-subsection font-serif text-primary-dark mb-6">Impact</h2>
                <div className="space-y-4">
                  {project.impact.map((item, index) => (
                    <div key={index} className="bg-white rounded-card p-6 shadow-md">
                      <p className="text-body text-primary-gray">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              {project.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-primary-coral/5 rounded-[30px] p-8"
                >
                  <div className="text-4xl text-primary-coral mb-4">"</div>
                  <p className="text-body-lg text-primary-dark italic mb-4">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-px bg-primary-coral" />
                    <div>
                      <p className="font-medium text-primary-dark">
                        {project.testimonial.author}
                      </p>
                      <p className="text-sm text-primary-gray">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-subsection font-serif text-primary-dark text-center mb-12">
                Project Gallery
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.galleryImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Project */}
        <section className="py-16 bg-gradient-to-b from-background-cream to-white">
          <div className="container-custom text-center">
            <Link 
              href={project.webpage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mb-8"
            >
              Visit Live Site →
            </Link>
            
            <div className="mt-12">
              <p className="text-primary-gray mb-4">Next Project</p>
              <Link 
                href={`/projects/${projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].id}`}
                className="inline-flex items-center gap-2 text-primary-coral font-medium text-xl hover:gap-4 transition-all duration-300"
              >
                <span>{projects[(projects.findIndex(p => p.id === project.id) + 1) % projects.length].title}</span>
                <span>→</span>
              </Link>
            </div>
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