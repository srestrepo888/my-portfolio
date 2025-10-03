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
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const maxDistance = 15;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
      
      if (distance < rect.width) {
        x.set((distanceX / rect.width) * maxDistance);
        y.set((distanceY / rect.height) * maxDistance);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
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
        transition: 'none'
      }}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;