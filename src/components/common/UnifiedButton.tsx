import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface UnifiedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const UnifiedButton: React.FC<UnifiedButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}) => {
  const baseStyles = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300, // Ultra-elegant, light font weight
    letterSpacing: '0.05em',
    textTransform: 'uppercase' as const,
    borderRadius: '50px', // Fully rounded for all buttons
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  const sizeStyles = {
    sm: {
      padding: '8px 16px',
      fontSize: 'clamp(0.8rem, 1.1vw, 0.9rem)',
      minHeight: '36px',
    },
    md: {
      padding: '12px 24px',
      fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
      minHeight: '44px',
    },
    lg: {
      padding: '16px 32px',
      fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)',
      minHeight: '52px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#FF6663',
      color: 'white',
      boxShadow: '0 4px 12px rgba(255, 102, 99, 0.3)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: '#4A5568',
      border: '1px solid #CBD5E1',
    },
  };

  const buttonStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    opacity: disabled ? 0.6 : 1,
  };

  const buttonContent = (
    <motion.button
      style={buttonStyles}
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { 
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={disabled ? {} : { 
        scale: 0.98,
        transition: { duration: 0.1, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Sophisticated hover effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent)',
          opacity: 0,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default UnifiedButton;
