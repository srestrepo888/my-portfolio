import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionValue } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const smoothScrollY = useSpring(scrollY, {
    damping: 15,
    stiffness: 90,
    mass: 0.5
  });
  
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const speed = 1.2; // Adjust scroll speed
      
      scrollY.set(Math.max(
        0, 
        Math.min(
          scrollY.get() + delta * speed,
          (contentRef.current?.scrollHeight || 0) - window.innerHeight
        )
      ));
    };
    
    // Handle touch events for mobile
    let touchStart = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStart = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      const touchDelta = touchStart - e.touches[0].clientY;
      touchStart = e.touches[0].clientY;
      
      scrollY.set(Math.max(
        0,
        Math.min(
          scrollY.get() + touchDelta * 2,
          (contentRef.current?.scrollHeight || 0) - window.innerHeight
        )
      ));
    };
    
    // Handle keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollAmount = 100;
      
      switch(e.key) {
        case 'ArrowUp':
          e.preventDefault();
          scrollY.set(Math.max(0, scrollY.get() - scrollAmount));
          break;
        case 'ArrowDown':
          e.preventDefault();
          scrollY.set(Math.min(
            (contentRef.current?.scrollHeight || 0) - window.innerHeight,
            scrollY.get() + scrollAmount
          ));
          break;
        case 'PageUp':
          e.preventDefault();
          scrollY.set(Math.max(0, scrollY.get() - window.innerHeight * 0.9));
          break;
        case 'PageDown':
          e.preventDefault();
          scrollY.set(Math.min(
            (contentRef.current?.scrollHeight || 0) - window.innerHeight,
            scrollY.get() + window.innerHeight * 0.9
          ));
          break;
        case 'Home':
          e.preventDefault();
          scrollY.set(0);
          break;
        case 'End':
          e.preventDefault();
          scrollY.set((contentRef.current?.scrollHeight || 0) - window.innerHeight);
          break;
      }
    };
    
    // Add momentum scrolling physics
    let velocity = 0;
    let rafId: number | null = null;
    const momentumScroll = () => {
      if (Math.abs(velocity) > 0.5) {
        velocity *= 0.95; // Friction
        scrollY.set(Math.max(
          0,
          Math.min(
            scrollY.get() + velocity,
            (contentRef.current?.scrollHeight || 0) - window.innerHeight
          )
        ));
        rafId = requestAnimationFrame(momentumScroll);
      }
    };
    
    const handleWheelWithMomentum = (e: WheelEvent) => {
      e.preventDefault();
      velocity = e.deltaY * 0.5;
      if (!rafId) {
        rafId = requestAnimationFrame(momentumScroll);
      }
    };
    
    // Attach event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent native scroll
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      if (rafId) cancelAnimationFrame(rafId);
      
      // Restore native scroll
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [scrollY]);
  
  // Create parallax layers
  const parallaxOffsetSlow = useTransform(smoothScrollY, [0, 1000], [0, -100]);
  const parallaxOffsetMedium = useTransform(smoothScrollY, [0, 1000], [0, -200]);
  const parallaxOffsetFast = useTransform(smoothScrollY, [0, 1000], [0, -300]);
  
  return (
    <div 
      ref={scrollableRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      }}
    >
      <motion.div
        ref={contentRef}
        style={{
          y: useTransform(smoothScrollY, (value) => -value),
          willChange: 'transform'
        }}
      >
        {children}
      </motion.div>
      
      {/* Progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 to-orange-400 z-50"
        style={{
          scaleX: useTransform(
            smoothScrollY,
            [0, (contentRef.current?.scrollHeight || 1) - window.innerHeight],
            [0, 1]
          ),
          transformOrigin: 'left'
        }}
      />
      
      {/* Scroll hint */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        animate={{
          opacity: scrollY.get() > 100 ? 0 : 0.6
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-500 text-sm"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 5v14m0 0l-7-7m7 7l7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SmoothScroll;