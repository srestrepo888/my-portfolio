import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import UnifiedButton from './UnifiedButton';
import TypographyAnimation from './TypographyAnimation';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.98]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-sticky transition-all ${
        scrolled 
          ? 'backdrop-blur-lg shadow-sm py-3' 
          : 'py-6'
      }`}
      style={{
        opacity: navOpacity,
        backgroundColor: scrolled 
          ? 'rgba(255, 251, 238, 0.95)' 
          : 'rgba(255, 251, 238, 0.8)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <TypographyAnimation
            variant="fade-in"
            delay={0.1}
            duration={0.6}
          >
            <Link
              href="/"
              className="text-nav-brand touchable text-hover-lift"
              style={{
                color: '#6B7280' // Ultra-elegant, softer color
              }}
            >
              Silvana
            </Link>
          </TypographyAnimation>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <TypographyAnimation
              key={item.label}
              variant="reveal-down"
              delay={index * 0.1}
              duration={0.6}
            >
              <Link
                href={item.href}
                className="text-nav touchable text-hover-lift px-2 py-1"
                style={{
                  color: '#6B7280' // Ultra-elegant, softer color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FF6663';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#6B7280'; // Ultra-elegant, softer color
                }}
              >
                {item.label}
              </Link>
            </TypographyAnimation>
          ))}
          <UnifiedButton
            variant="primary"
            size="md"
            className="ml-4"
          >
            Let's Connect
          </UnifiedButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-11 h-11 relative flex flex-col justify-center items-center touchable"
          aria-label="Toggle menu"
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <motion.span 
            className="absolute w-6 h-0.5 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              transform: mobileMenuOpen ? 'rotate(45deg)' : 'translateY(-8px)'
            }}
            animate={{ 
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 0 : -8 
            }}
          />
          <motion.span 
            className="absolute w-6 h-0.5 transition-all duration-300"
            style={{ backgroundColor: 'var(--color-primary)' }}
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <motion.span 
            className="absolute w-6 h-0.5 transition-all duration-300"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              transform: mobileMenuOpen ? 'rotate(-45deg)' : 'translateY(8px)'
            }}
            animate={{ 
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? 0 : 8 
            }}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 shadow-lg md:hidden overflow-hidden"
              style={{ backgroundColor: 'var(--color-background)' }}
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 transition-colors duration-300 min-h-[44px]"
                      style={{ 
                        color: '#6B7280', // Ultra-elegant, softer color
                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                        fontFamily: 'Inter, sans-serif', // Updated to Inter
                        fontWeight: 300, // Changed to light
                        letterSpacing: '0.05em',
                        textTransform: 'none'
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.color = '#FF6663';
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.color = '#6B7280'; // Ultra-elegant, softer color
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4">
                  <UnifiedButton
                    variant="primary"
                    size="md"
                  >
                    Let's Connect
                  </UnifiedButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;