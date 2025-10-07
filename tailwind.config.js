/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY BRAND COLORS - Sophisticated Foundation
        coral: {
          DEFAULT: '#FF6663', // Primary accent - energetic, confident
          hover: '#E55A57', // Darker on hover
          light: '#FF9996', // Light variant
          dark: '#CC5250', // Dark variant
        },
        sage: {
          DEFAULT: '#8FBC8F', // Sage green - wisdom, growth, balance
          hover: '#7BA67B', // Darker on hover
          light: '#A8D8A8', // Light variant
          dark: '#6B9B6B', // Dark variant
        },
        lavender: {
          DEFAULT: '#B19CD9', // Lavender - creativity, luxury, calm
          hover: '#9F8BC7', // Darker on hover
          light: '#C7B8E0', // Light variant
          dark: '#9B7BC7', // Dark variant
        },
        amber: {
          DEFAULT: '#FFB347', // Amber - warmth, optimism, energy
          hover: '#FFA726', // Darker on hover
          light: '#FFC966', // Light variant
          dark: '#FF8F00', // Dark variant
        },
        slate: {
          DEFAULT: '#708090', // Slate blue - sophistication, trust
          hover: '#5A6B7D', // Darker on hover
          light: '#8B9DC3', // Light variant
          dark: '#4A5A6B', // Dark variant
        },
        
        // SOPHISTICATED NEUTRAL SYSTEM
        charcoal: {
          DEFAULT: '#2C3E50', // Deep charcoal - authority, elegance
          hover: '#1A2A3A', // Darker on hover
          light: '#4A5A6B', // Light variant
        },
        stone: {
          DEFAULT: '#8B9DC3', // Stone blue - calm, professional
          hover: '#7A8BB3', // Darker on hover
          light: '#A8B8D8', // Light variant
        },
        pearl: {
          DEFAULT: '#F8F9FA', // Pearl white - purity, clarity
          hover: '#E8F4F8', // Slightly darker on hover
        },
        mist: {
          DEFAULT: '#E8F4F8', // Mist blue - serenity, openness
          hover: '#D8E4E8', // Darker on hover
        },
        
        // TEMPERATURE BALANCE COLORS
        gold: {
          DEFAULT: '#D4AF37', // Warm gold - luxury, success
          hover: '#B8941F', // Darker on hover
          light: '#E6C659', // Light variant
        },
        terracotta: {
          DEFAULT: '#E2725B', // Warm terracotta - earth, stability
          hover: '#D55A43', // Darker on hover
          light: '#E88A73', // Light variant
        },
        mint: {
          DEFAULT: '#98FB98', // Cool mint - freshness, renewal
          hover: '#7ED87E', // Darker on hover
          light: '#B8FFB8', // Light variant
        },
        steel: {
          DEFAULT: '#B0C4DE', // Cool steel - precision, reliability
          hover: '#9AB4CE', // Darker on hover
          light: '#C6D4EE', // Light variant
        },
        
        // LEGACY SUPPORT - Maintained for compatibility
        primary: {
          DEFAULT: '#1A1A1A', // Updated to AAA contrast
          dark: '#0F0F0F',
          gray: '#4A5568',
          light: '#718096',
        },
        accent: {
          DEFAULT: '#FF6663', // Primary accent color - coral red
          hover: '#E55A57',
          light: '#FF9996',
          dark: '#CC5250',
        },
        background: {
          DEFAULT: '#FFFBEE', // Warm cream background
          cream: '#FFFBEE',
          surface: '#FFFFFF',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(48px, 7vw, 80px)', '1.1'],
        'display': ['clamp(40px, 5vw, 56px)', '1.2'],
        'title': ['clamp(28px, 3.5vw, 40px)', '1.3'],
        'heading': ['clamp(20px, 2.5vw, 28px)', '1.4'],
        'body': ['clamp(15px, 1.8vw, 18px)', '1.6'],
        'small': ['clamp(13px, 1.4vw, 14px)', '1.5'],
        'meta': ['clamp(11px, 1.2vw, 12px)', '1.4'],
      },
      spacing: {
        'section': 'clamp(64px, 10vh, 100px)', // Reduced from 120px
        'component': '32px', // Tightened spacing
        'container': '1200px',
        'reading': '680px', // 75 characters
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse': 'pulse 2s infinite',
        'skeleton': 'skeleton 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        skeleton: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      borderRadius: {
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'card': '24px',
        'button': '9999px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'md': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'lg': '0 12px 32px rgba(0, 0, 0, 0.12)',
        'xl': '0 20px 48px rgba(0, 0, 0, 0.16)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'button': '0 4px 14px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'base': '400ms',
        'slow': '800ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'overlay': '300',
        'modal': '400',
        'popover': '500',
        'tooltip': '600',
        'cursor': '9999',
      }
    },
  },
  plugins: [],
}