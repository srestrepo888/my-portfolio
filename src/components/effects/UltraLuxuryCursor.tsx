import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface UltraLuxuryCursorProps {
  className?: string;
}

const UltraLuxuryCursor: React.FC<UltraLuxuryCursorProps> = ({ className = '' }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPoints, setTrailPoints] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number; timestamp: number }>>([]);

  // Smooth cursor movement with advanced spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 30, mass: 0.8 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 30, mass: 0.8 });

  // Trail movement with delay
  const trailX = useMotionValue(0);
  const trailY = useMotionValue(0);
  const trailSpringX = useSpring(trailX, { stiffness: 200, damping: 25, mass: 1.2 });
  const trailSpringY = useSpring(trailY, { stiffness: 200, damping: 25, mass: 1.2 });

  // Transform values for sophisticated animations
  const scale = useTransform(springX, [0, 1], [1, 1.1]);
  const rotate = useTransform(springX, [0, 1], [0, 3]);
  const trailScale = useTransform(trailSpringX, [0, 1], [0.8, 1]);

  // Create ripple effect
  const createRipple = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setRipples(prev => [...prev, { x, y, id, timestamp: Date.now() }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 1000);
  }, []);

  // Update trail points for sophisticated trail effect
  const updateTrail = useCallback((x: number, y: number) => {
    const newPoint = { x, y, id: Date.now() + Math.random() };
    setTrailPoints(prev => {
      const updated = [newPoint, ...prev].slice(0, 8); // Keep last 8 points
      return updated;
    });
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let lastTime = 0;

    const updateCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      const { clientX, clientY } = e;
      const currentTime = performance.now();
      
      // Throttle updates for better performance
      if (currentTime - lastTime > 16) { // ~60fps
        setMousePosition({ x: clientX, y: clientY });
        updateTrail(clientX, clientY);
        
        cursorX.set(clientX);
        cursorY.set(clientY);
        
        // Delayed trail movement for sophisticated effect
        setTimeout(() => {
          trailX.set(clientX);
          trailY.set(clientY);
        }, 50);
        
        lastTime = currentTime;
      }
      
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      createRipple(e.clientX, e.clientY);
    };
    
    const handleMouseUp = () => setIsClicking(false);

    // Advanced hover detection
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches(`
        a, button, [role="button"], input, textarea, select, 
        [tabindex], .touchable, .cursor-pointer, 
        [data-cursor="hover"], [data-cursor="click"]
      `);
      
      setIsHovering(isInteractive);
      
      // Add special effects for different element types
      if (target.matches('a')) {
        // Link hover effect
        target.style.transform = 'scale(1.02)';
        target.style.transition = 'transform 0.3s ease';
      } else if (target.matches('button')) {
        // Button hover effect
        target.style.transform = 'scale(1.05)';
        target.style.transition = 'transform 0.2s ease';
      }
    };

    const handleElementLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      target.style.transform = 'scale(1)';
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleElementHover);
    document.addEventListener('mouseout', handleElementLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseout', handleElementLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [cursorX, cursorY, trailX, trailY, createRipple, updateTrail]);

  return (
    <>
      {/* Main Cursor - Ultra Sophisticated Design */}
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] ${className}`}
        style={{
          x: springX,
          y: springY,
          scale: isHovering ? 1.8 : isClicking ? 0.6 : 1,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.8 : isClicking ? 0.6 : 1,
        }}
        transition={{ 
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {/* Outer Aura - Luxurious Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '60px',
            height: '60px',
            background: `
              radial-gradient(circle, 
                rgba(255, 102, 99, 0.2) 0%, 
                rgba(255, 153, 150, 0.1) 30%, 
                transparent 70%
              )
            `,
            filter: 'blur(12px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: isHovering ? 2.2 : isClicking ? 0.8 : 1,
            opacity: isHovering ? 0.9 : isClicking ? 0.3 : 0.7,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Middle Ring - Elegant Border with Gradient */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '32px',
            height: '32px',
            background: `
              linear-gradient(135deg, 
                rgba(255, 102, 99, 0.1) 0%, 
                rgba(255, 153, 150, 0.05) 50%, 
                rgba(255, 102, 99, 0.1) 100%
              )
            `,
            border: '1px solid rgba(255, 102, 99, 0.3)',
            transform: 'translate(-50%, -50%)',
            boxShadow: 'inset 0 1px 2px rgba(255, 102, 99, 0.2)',
          }}
          animate={{
            scale: isHovering ? 1.4 : isClicking ? 0.7 : 1,
            borderColor: isHovering ? 'rgba(255, 102, 99, 0.8)' : 'rgba(255, 102, 99, 0.3)',
            boxShadow: isHovering 
              ? 'inset 0 1px 2px rgba(255, 102, 99, 0.4), 0 0 8px rgba(255, 102, 99, 0.3)'
              : 'inset 0 1px 2px rgba(255, 102, 99, 0.2)',
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Inner Core - Sophisticated Center */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '12px',
            height: '12px',
            background: `
              linear-gradient(135deg, 
                #FF6663 0%, 
                #FF9996 50%, 
                #FF6663 100%
              )
            `,
            transform: 'translate(-50%, -50%)',
            boxShadow: `
              0 0 16px rgba(255, 102, 99, 0.6),
              0 0 32px rgba(255, 102, 99, 0.3),
              inset 0 1px 2px rgba(255, 255, 255, 0.2)
            `,
          }}
          animate={{
            scale: isHovering ? 1.3 : isClicking ? 0.4 : 1,
            boxShadow: isHovering 
              ? `
                0 0 24px rgba(255, 102, 99, 0.8),
                0 0 48px rgba(255, 102, 99, 0.4),
                inset 0 1px 2px rgba(255, 255, 255, 0.3)
              `
              : `
                0 0 16px rgba(255, 102, 99, 0.6),
                0 0 32px rgba(255, 102, 99, 0.3),
                inset 0 1px 2px rgba(255, 255, 255, 0.2)
              `,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Sophisticated Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            width: '16px',
            height: '16px',
            border: '1px solid rgba(255, 102, 99, 0.4)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Trail Cursor - Delayed Follow Effect */}
      <motion.div
        ref={trailRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          scale: trailScale,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.6 : 0 }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: '20px',
            height: '20px',
            background: 'rgba(255, 102, 99, 0.1)',
            border: '1px solid rgba(255, 102, 99, 0.2)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Sophisticated Trail Points */}
      <AnimatePresence>
        {trailPoints.map((point, index) => (
          <motion.div
            key={point.id}
            className="fixed pointer-events-none z-[9997]"
            style={{
              x: point.x,
              y: point.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1 - (index * 0.1),
              opacity: 0.8 - (index * 0.1),
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${4 - (index * 0.5)}px`,
                height: `${4 - (index * 0.5)}px`,
                background: `rgba(255, 102, 99, ${0.6 - (index * 0.08)})`,
                filter: 'blur(0.5px)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Hover State - Sophisticated Expansion */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9996]"
          style={{
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="rounded-full"
            style={{
              width: '80px',
              height: '80px',
              border: '2px solid rgba(255, 102, 99, 0.2)',
              background: 'rgba(255, 102, 99, 0.03)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      {/* Click Ripples - Ultra Sophisticated */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="fixed pointer-events-none z-[9995]"
            style={{
              x: ripple.x,
              y: ripple.y,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              className="rounded-full"
              style={{
                width: '30px',
                height: '30px',
                border: '2px solid rgba(255, 102, 99, 0.4)',
                background: 'rgba(255, 102, 99, 0.05)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Particles - Luxurious Ambiance */}
      <motion.div
        className="fixed pointer-events-none z-[9994]"
        style={{
          x: springX,
          y: springY,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '1px',
              height: '1px',
              background: 'rgba(255, 102, 99, 0.3)',
              filter: 'blur(0.5px)',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 30],
              y: [0, (Math.random() - 0.5) * 30],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default UltraLuxuryCursor;
