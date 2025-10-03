import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navigation from '@/components/common/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import Footer from '@/components/common/Footer';

// Lazy load heavy components
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), {
  loading: () => <div className="h-96 bg-background-cream animate-pulse rounded-lg" />
});

const ExperienceSection = dynamic(() => import('@/components/sections/ExperienceSection'), {
  loading: () => <div className="h-96 bg-background-cream animate-pulse rounded-lg" />
});

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="h-96 bg-background-cream animate-pulse rounded-lg" />
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Silvana Restrepo - Experience Architect | Strategic Design & Digital Transformation</title>
        <meta name="description" content="Experience Architect crafting digital solutions that bridge strategy and human-centered design. 20+ years transforming business vision into human experiences across healthcare, entertainment, hospitality, and retail." />
        <meta name="keywords" content="Experience Architect, Strategic Design, Digital Transformation, Product Strategy, Service Design, User Research, Design Ops, Business Innovation" />
        <meta name="author" content="Silvana Restrepo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Silvana Restrepo - Experience Architect" />
        <meta property="og:description" content="Transforming business vision into human experiences—where strategic design meets operational excellence and technological possibility." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silvanarestrepo.com" />
        <meta property="og:image" content="https://silvanarestrepo.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Silvana Restrepo Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Silvana Restrepo - Experience Architect" />
        <meta name="twitter:description" content="Transforming business vision into human experiences—where strategic design meets operational excellence and technological possibility." />
        <meta name="twitter:image" content="https://silvanarestrepo.com/images/twitter-card.jpg" />
        
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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