import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import dynamic from 'next/dynamic';
import gsap from 'gsap';

const ParticleField = dynamic(() => import('@/components/effects/ParticleField'), { ssr: false });
const MagneticButton = dynamic(() => import('@/components/effects/MagneticButton'), { ssr: false });
const LiquidText = dynamic(() => import('@/components/effects/LiquidText'), { ssr: false });

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / innerWidth * 30);
      mouseY.set((clientY - innerHeight / 2) / innerHeight * 30);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ 
        background: `linear-gradient(180deg, 
          #FDF6F0 0%, 
          rgba(253, 246, 240, 0.98) 30%,
          rgba(255, 251, 248, 0.95) 60%,
          #FDF6F0 100%)`,
        opacity
      }}
    >
      {/* Award-Winning Particle System */}
      {mounted && <ParticleField />}
      
      {/* Dynamic Gradient that follows cursor */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(242, 107, 117, 0.03) 0%, 
            transparent 40%)`,
          x: smoothMouseX,
          y: smoothMouseY,
          scale: 1.2
        }}
      />

      {/* Ultra-Premium Navigation */}
      <motion.header 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -40 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 z-40 px-8 lg:px-16 py-8 lg:py-12"
      >
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
          {/* Signature Logo */}
          <motion.div 
            className="relative cursor-pointer group" 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span
              className="text-3xl lg:text-4xl"
              style={{ 
                fontFamily: 'Didot, Georgia, serif',
                color: '#4A5568',
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}
            >
              Silvana
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-pink-400/60 to-transparent"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
          
          {/* Navigation with Stagger Animation */}
          <div className="hidden lg:flex items-center gap-12">
            {['Home', 'About', 'Projects', 'Experience', 'Services'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-xs uppercase tracking-widest text-gray-600 hover:text-gray-800 transition-colors duration-300"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: mounted ? 0.8 : 0, y: mounted ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                whileHover={{ y: -2, opacity: 1 }}
                style={{ 
                  fontFamily: 'Inter, -apple-system, sans-serif', 
                  letterSpacing: '0.18em', 
                  fontWeight: 500 
                }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-pink-400 via-pink-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {mounted && (
              <MagneticButton>
                <motion.button 
                  className="relative px-10 py-3.5 text-xs uppercase tracking-widest overflow-hidden group"
                  style={{ 
                    background: 'linear-gradient(135deg, #2D3748 0%, #1A202C 100%)',
                    fontFamily: 'Inter, -apple-system, sans-serif',
                    letterSpacing: '0.2em',
                    fontWeight: 600,
                    color: 'white',
                    borderRadius: '2px',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
                  }}
                  whileHover={{ 
                    boxShadow: '0 20px 45px rgba(0, 0, 0, 0.18)'
                  }}
                >
                  <span className="relative z-10">Let's Connect</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/90 to-pink-400/90"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </motion.button>
              </MagneticButton>
            )}
          </div>
        </nav>
      </motion.header>

      {/* Main Hero Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Award-Winning Typography */}
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : -80 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Floating Number Detail */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: mounted ? 0.08 : 0, scale: mounted ? 1 : 0.8 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -top-20 -left-8 text-[200px] font-thin pointer-events-none select-none"
                style={{ 
                  fontFamily: 'Didot, serif',
                  color: '#E5E7EB',
                  zIndex: -1,
                  lineHeight: 1
                }}
              >
                01
              </motion.span>
              
              <div className="relative">
                <h1 className="relative mb-8">
                  {mounted && (
                    <>
                      <LiquidText
                        text="EXPERIENCE"
                        className="block"
                        style={{ 
                          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                          fontFamily: 'Didot, Georgia, serif',
                          fontWeight: 300,
                          letterSpacing: '0.05em',
                          lineHeight: '0.85',
                          color: '#F26B75'
                        }}
                        delay={0.4}
                      />
                      <LiquidText
                        text="ARCHITECT"
                        className="block mt-4"
                        style={{ 
                          fontSize: 'clamp(3rem, 7vw, 5rem)',
                          fontFamily: 'Inter, -apple-system, sans-serif',
                          fontWeight: 200,
                          letterSpacing: '0.25em',
                          lineHeight: '0.9',
                          color: '#4A5568'
                        }}
                        delay={0.6}
                      />
                    </>
                  )}
                </h1>

                {/* Sophisticated Line Element */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-10 origin-left"
                  style={{
                    width: '100px',
                    height: '1px',
                    background: 'linear-gradient(90deg, #F26B75 0%, rgba(242, 107, 117, 0.3) 100%)'
                  }}
                />

                {/* Premium CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 40 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap gap-4"
                >
                  {mounted && (
                    <>
                      <MagneticButton>
                        <motion.button 
                          className="group relative px-14 py-5 overflow-hidden"
                          style={{ 
                            background: 'linear-gradient(135deg, #F26B75 0%, #E85D67 100%)',
                            borderRadius: '2px',
                            fontFamily: 'Inter, -apple-system, sans-serif',
                            fontSize: '13px',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: 'white',
                            fontWeight: 600,
                            boxShadow: '0 20px 40px rgba(242, 107, 117, 0.2)'
                          }}
                          whileHover={{ 
                            boxShadow: '0 25px 50px rgba(242, 107, 117, 0.3)'
                          }}
                        >
                          <span className="relative z-10">View My Work</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
                            initial={{ y: '100%' }}
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </MagneticButton>
                      
                      <MagneticButton>
                        <motion.button 
                          className="group px-14 py-5 relative overflow-hidden"
                          style={{ 
                            backgroundColor: 'transparent',
                            border: '1px solid #CBD5E1',
                            borderRadius: '2px',
                            fontFamily: 'Inter, -apple-system, sans-serif',
                            fontSize: '13px',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: '#64748B',
                            fontWeight: 600
                          }}
                          whileHover={{ 
                            borderColor: '#94A3B8'
                          }}
                        >
                          <span className="relative z-10">About Me</span>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-gray-100/50"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.button>
                      </MagneticButton>
                    </>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Hero Portrait with Premium Treatment */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 80 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ y }}
              className="relative"
            >
              <motion.div className="relative">
                {/* Premium Image Container */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: mounted ? 1 : 0.85, opacity: mounted ? 1 : 0 }}
                  transition={{ duration: 1.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: '300px 300px 300px 300px',
                    boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.12)',
                    background: 'linear-gradient(135deg, #FDF6F0 0%, #FFFFFF 100%)'
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className="relative"
                    style={{
                      width: '100%',
                      maxWidth: '500px',
                      aspectRatio: '4/5',
                      background: 'linear-gradient(180deg, rgba(253,246,240,0.2) 0%, rgba(242,107,117,0.05) 100%)'
                    }}
                  >
                    <img
                      src="/images/hero-portrait.svg"
                      alt="Silvana Restrepo"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      style={{
                        filter: 'contrast(1.05) brightness(1.02)',
                        opacity: imageLoaded ? 1 : 0,
                        transition: 'opacity 1.5s ease-out',
                        transform: 'scale(1.15) translateY(-5%)'
                      }}
                      onLoad={() => setImageLoaded(true)}
                    />
                    {/* Subtle Overlay for depth */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to bottom, 
                          transparent 0%, 
                          transparent 50%, 
                          rgba(253,246,240,0.2) 80%, 
                          rgba(253,246,240,0.4) 100%)`
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating Accent Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-12 -right-12 w-24 h-24"
                  style={{
                    background: 'linear-gradient(135deg, #F26B75 0%, #E91E63 100%)',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    opacity: 0.08
                  }}
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-10 -left-10 w-20 h-20"
                  style={{
                    background: 'linear-gradient(135deg, #4A5568 0%, #2D3748 100%)',
                    borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                    opacity: 0.06
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Ultra-Luxury Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ 
              x: [0, 40, 0],
              y: [0, -40, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-[10%] w-3 h-3 rounded-full"
            style={{ backgroundColor: '#F26B75', opacity: 0.2 }}
          />
          <motion.div
            animate={{ 
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
            className="absolute bottom-1/3 right-[15%] w-4 h-4 rounded-full"
            style={{ backgroundColor: '#4A5568', opacity: 0.15 }}
          />
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 0.5 : 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 border border-gray-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;