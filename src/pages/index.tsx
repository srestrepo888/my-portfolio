import Head from 'next/head';
import Navigation from '@/components/common/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProfessionalJourney from '@/components/sections/ProfessionalJourney';
import ExpertiseSection from '@/components/sections/ExpertiseSection';
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
        <ProfessionalJourney />
        <ExpertiseSection />
      </main>
      <Footer />
    </>
  );
}