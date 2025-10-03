import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    // Only setup cursor for non-touch devices
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Add magnetic effect to buttons and links
    const addMagneticEffect = () => {
      const magneticElements = document.querySelectorAll('button, a, .touchable');
      
      magneticElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          
          // Add magnetic pull effect
          el.addEventListener('mousemove', (e: any) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            if (distance < 50) { // Magnetic radius
              const pullX = deltaX * 0.2;
              const pullY = deltaY * 0.2;
              cursorX.set(mouseX - pullX);
              cursorY.set(mouseY - pullY);
            }
          });
        });
        
        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
        });
      });
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Setup magnetic effect after a short delay to ensure DOM is ready
    setTimeout(addMagneticEffect, 100);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Don't render on touch devices
  if (isTouchDevice) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Custom cursor */}
      <motion.div
        className="fixed pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: {
            type: 'spring',
            damping: 25,
            stiffness: 700,
          },
          opacity: {
            duration: 0.2,
          },
        }}
      >
        <div
          className={`rounded-full ${
            isHovering ? 'w-10 h-10' : 'w-5 h-5'
          } bg-accent transition-all duration-300`}
          style={{
            backgroundColor: 'var(--color-accent)',
          }}
        />
      </motion.div>
      
      {/* Cursor dot for precision */}
      <motion.div
        className="fixed pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{
            backgroundColor: 'var(--color-accent)',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;