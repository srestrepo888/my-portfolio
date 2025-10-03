import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
          ? 'rgba(255, 248, 245, 0.95)' 
          : 'rgba(255, 248, 245, 0.8)'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="font-serif text-heading font-bold touchable transition-all duration-300 hover:scale-105"
          style={{ color: 'var(--color-primary)' }}
        >
          Silvana Restrepo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="touchable font-medium transition-all duration-300 hover:scale-105 px-2 py-1"
                style={{ 
                  color: 'var(--color-primary)',
                  fontSize: 'var(--font-body)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--color-accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.button 
            className="touchable ml-4 px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 min-h-[44px]"
            style={{ 
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-background)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's Connect
          </motion.button>
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
                      className="block py-3 font-medium transition-colors duration-300 min-h-[44px]"
                      style={{ 
                        color: 'var(--color-primary)',
                        fontSize: 'var(--font-body)'
                      }}
                      onTouchStart={(e) => {
                        e.currentTarget.style.color = 'var(--color-accent)';
                      }}
                      onTouchEnd={(e) => {
                        e.currentTarget.style.color = 'var(--color-primary)';
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button 
                  className="mt-4 px-6 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px]"
                  style={{ 
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-background)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Let's Connect
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;