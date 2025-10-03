import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  showPercentage?: boolean;
  position?: 'top' | 'bottom';
  height?: number;
  className?: string;
}

const ScrollProgress: React.FC<ScrollProgressProps> = ({
  showPercentage = false,
  position = 'top',
  height = 4,
  className = ''
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setPercentage(Math.round(value * 100));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className={`fixed left-0 right-0 z-[200] origin-left ${
          position === 'top' ? 'top-0' : 'bottom-0'
        } ${className}`}
        style={{
          height: `${height}px`,
          backgroundColor: 'var(--color-accent)',
          scaleX,
          transformOrigin: 'left'
        }}
      />
      
      {showPercentage && percentage > 0 && percentage < 100 && (
        <motion.div
          className={`fixed right-4 z-[201] flex items-center justify-center rounded-full ${
            position === 'top' ? 'top-20' : 'bottom-20'
          }`}
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-background)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-medium">{percentage}%</span>
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;