import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface LuxuryCursorProps {
  className?: string;
}

const LuxuryCursor: React.FC<LuxuryCursorProps> = ({ className = '' }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Smooth cursor movement with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  // Transform values for different cursor states
  const scale = useTransform(springX, [0, 1], [1, 1.2]);
  const rotate = useTransform(springX, [0, 1], [0, 5]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      
      cursorX.set(clientX);
      cursorY.set(clientY);
      
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Handle hover states for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, [tabindex]');
      setIsHovering(isInteractive);
    };

    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementHover);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] ${className}`}
        style={{
          x: springX,
          y: springY,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          rotate: isHovering ? 0 : rotate,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : isClicking ? 0.8 : 1
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Outer Ring - Sophisticated Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '40px',
            height: '40px',
            background: 'radial-gradient(circle, rgba(255, 102, 99, 0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 1.8 : isClicking ? 0.6 : 1,
            opacity: isHovering ? 0.8 : isClicking ? 0.4 : 0.6,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Middle Ring - Elegant Border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '24px',
            height: '24px',
            border: '1px solid rgba(255, 102, 99, 0.4)',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 102, 99, 0.05)',
          }}
          animate={{
            scale: isHovering ? 1.3 : isClicking ? 0.7 : 1,
            borderColor: isHovering ? 'rgba(255, 102, 99, 0.8)' : 'rgba(255, 102, 99, 0.4)',
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Inner Core - Luxurious Center */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #FF6663, #FF9996)',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 12px rgba(255, 102, 99, 0.6)',
          }}
          animate={{
            scale: isHovering ? 1.2 : isClicking ? 0.5 : 1,
            boxShadow: isHovering 
              ? '0 0 20px rgba(255, 102, 99, 0.8)' 
              : '0 0 12px rgba(255, 102, 99, 0.6)',
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />

        {/* Sophisticated Trail Effect */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '2px',
            height: '2px',
            background: 'rgba(255, 102, 99, 0.3)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
      </motion.div>

      {/* Cursor Trail - Luxurious Particle System */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '1px',
              height: '1px',
              background: 'rgba(255, 102, 99, 0.4)',
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 20],
              y: [0, (Math.random() - 0.5) * 20],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Hover State Indicator */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9997]"
          style={{
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: '60px',
              height: '60px',
              border: '2px solid rgba(255, 102, 99, 0.3)',
              background: 'rgba(255, 102, 99, 0.05)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9996]"
          style={{
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="rounded-full"
            style={{
              width: '20px',
              height: '20px',
              border: '2px solid rgba(255, 102, 99, 0.6)',
              background: 'rgba(255, 102, 99, 0.1)',
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default LuxuryCursor;
