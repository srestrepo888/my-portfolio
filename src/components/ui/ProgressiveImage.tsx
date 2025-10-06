import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  placeholderColor?: string;
  onLoad?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  style = {},
  placeholderColor = '#FDF6F0',
  onLoad
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
      setDimensions({ width: img.width, height: img.height });
      if (onLoad) onLoad();
    };
    
    img.onerror = () => {
      setImageError(true);
    };
    
    // Start loading the image
    img.src = src;
    
    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Image is in viewport, start loading
            img.src = src;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01, rootMargin: '50px' }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [src, onLoad]);
  
  // Generate artistic SVG placeholder
  const generatePlaceholder = () => {
    const shapes = [];
    const numShapes = 5;
    
    for (let i = 0; i < numShapes; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 40 + 20;
      const opacity = Math.random() * 0.3 + 0.1;
      
      shapes.push(
        <circle
          key={`shape-${i}`}
          cx={`${x}%`}
          cy={`${y}%`}
          r={`${size}%`}
          fill={i % 2 === 0 ? '#F26B75' : '#FFDAB9'}
          opacity={opacity}
        />
      );
    }
    
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <rect width="100" height="100" fill={placeholderColor} />
        <g filter="url(#blur)">
          {shapes}
        </g>
      </svg>
    );
  };
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={style}
      ref={imgRef}
    >
      <AnimatePresence mode="wait">
        {!imageLoaded && (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Artistic SVG Placeholder */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full"
            >
              {generatePlaceholder()}
            </motion.div>
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(
                  90deg,
                  transparent 0%,
                  rgba(255, 255, 255, 0.3) 50%,
                  transparent 100%
                )`,
                transform: 'translateX(-100%)'
              }}
              animate={{
                transform: ['translateX(-100%)', 'translateX(100%)']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Loading dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Actual Image with blur-up effect */}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${imageLoaded ? '' : 'invisible'}`}
        initial={{ 
          filter: 'blur(20px)',
          scale: 1.1
        }}
        animate={imageLoaded ? {
          filter: 'blur(0px)',
          scale: 1
        } : {}}
        transition={{
          duration: 0.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{
          ...style,
          willChange: 'filter, transform'
        }}
      />
      
      {/* Error state */}
      {imageError && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
        >
          <div className="text-center">
            <svg 
              className="w-16 h-16 mx-auto mb-4 text-gray-400"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <p className="text-sm text-gray-500">Image could not be loaded</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ProgressiveImage;