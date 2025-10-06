import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className, style, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isNearby, setIsNearby] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      const magneticRange = rect.width * 1.5;
      
      // Check if cursor is nearby for magnetic effect
      if (distance < magneticRange) {
        setIsNearby(true);
        
        const magneticPower = 1 - (distance / magneticRange);
        const maxTranslation = isHovered ? 20 : 10;
        
        // Apply magnetic pull with exponential falloff
        const pullX = (distanceX / magneticRange) * maxTranslation * Math.pow(magneticPower, 1.5);
        const pullY = (distanceY / magneticRange) * maxTranslation * Math.pow(magneticPower, 1.5);
        
        x.set(pullX);
        y.set(pullY);
        
        // Add subtle 3D rotation effect when hovered
        if (isHovered) {
          const maxRotation = 10;
          rotateY.set((distanceX / rect.width) * maxRotation);
          rotateX.set(-(distanceY / rect.height) * maxRotation);
        }
      } else {
        setIsNearby(false);
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      rotateX.set(0);
      rotateY.set(0);
      setIsHovered(false);
      setIsNearby(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const element = ref.current;
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        x: springX,
        y: springY,
        rotateX: springRotateX,
        rotateY: springRotateY,
        transition: 'none',
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
        cursor: isNearby ? 'pointer' : 'auto'
      }}
      onClick={onClick}
      animate={{
        scale: isHovered ? 1.05 : isNearby ? 1.02 : 1,
        filter: isHovered 
          ? 'brightness(1.1) saturate(1.2)' 
          : isNearby 
          ? 'brightness(1.05)' 
          : 'brightness(1)'
      }}
      transition={{
        scale: { type: 'spring', stiffness: 400, damping: 25 },
        filter: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;