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
        // Updated color system per guidelines
        primary: {
          DEFAULT: '#1F1F1F', // Near black for text
          dark: '#1F1F1F',
          gray: '#4A5568', // Readable gray
          light: '#718096', // Lighter gray
        },
        accent: {
          DEFAULT: '#FF5A5A', // Vibrant coral
          hover: '#FF4040',
          light: '#FFB3B3', // Light pink
        },
        background: {
          DEFAULT: '#FFF8F5', // Warm peach - personal branding
          cream: '#FFF8F3',
          pink: '#FFE4E4',
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