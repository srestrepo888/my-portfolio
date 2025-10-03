import Head from 'next/head';
import Navigation from '@/components/common/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Silvana Restrepo - Experience Architect</title>
      </Head>
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}