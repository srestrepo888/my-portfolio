import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  current: number;
  total: number;
  variant?: 'dots' | 'bars' | 'numbers' | 'fraction';
  position?: 'bottom' | 'top' | 'inline';
  showArrows?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  onGoTo?: (index: number) => void;
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  current,
  total,
  variant = 'dots',
  position = 'bottom',
  showArrows = false,
  onNext,
  onPrevious,
  onGoTo,
  className = ''
}) => {
  const renderDots = () => (
    <div className="flex gap-2">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onGoTo?.(i)}
          className={`transition-all duration-300 ${
            i === current
              ? 'w-8 h-2 rounded-full'
              : 'w-2 h-2 rounded-full hover:scale-125'
          }`}
          style={{
            backgroundColor: i === current 
              ? 'var(--color-accent)' 
              : 'var(--color-primary-light)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  const renderBars = () => (
    <div className="flex gap-1 w-full max-w-xs">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onGoTo?.(i)}
          className="flex-1 h-1 rounded-full transition-all duration-300"
          style={{
            backgroundColor: i === current 
              ? 'var(--color-accent)' 
              : 'var(--color-background-pink)',
            opacity: i === current ? 1 : 0.3
          }}
          whileHover={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );

  const renderNumbers = () => (
    <div className="flex gap-2">
      {Array.from({ length: total }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onGoTo?.(i)}
          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
            i === current
              ? 'scale-110'
              : 'hover:scale-105'
          }`}
          style={{
            backgroundColor: i === current 
              ? 'var(--color-accent)' 
              : 'transparent',
            color: i === current 
              ? 'var(--color-background)' 
              : 'var(--color-primary)',
            border: i === current 
              ? 'none' 
              : '1px solid var(--color-primary-light)'
          }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${i + 1}`}
        >
          {i + 1}
        </motion.button>
      ))}
    </div>
  );

  const renderFraction = () => (
    <div className="flex items-center gap-2 font-mono text-sm">
      <span style={{ color: 'var(--color-accent)' }}>
        {String(current + 1).padStart(2, '0')}
      </span>
      <span style={{ color: 'var(--color-primary-light)' }}>/</span>
      <span style={{ color: 'var(--color-primary-gray)' }}>
        {String(total).padStart(2, '0')}
      </span>
    </div>
  );

  const renderIndicator = () => {
    switch (variant) {
      case 'bars':
        return renderBars();
      case 'numbers':
        return renderNumbers();
      case 'fraction':
        return renderFraction();
      default:
        return renderDots();
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {showArrows && (
        <motion.button
          onClick={onPrevious}
          disabled={current === 0}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
          style={{
            backgroundColor: 'var(--color-background-pink)',
            color: 'var(--color-primary)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </motion.button>
      )}

      {renderIndicator()}

      {showArrows && (
        <motion.button
          onClick={onNext}
          disabled={current === total - 1}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-30"
          style={{
            backgroundColor: 'var(--color-background-pink)',
            color: 'var(--color-primary)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </motion.button>
      )}
    </div>
  );
};

export default ProgressIndicator;