// Portfolio Safeguards - 100% Guidelines Adherence
// This file enforces all design, performance, and content rules

export const NavigationSafeguards = {
  // RULE 1: Sticky behavior with backdrop blur
  stickyThreshold: 50, // pixels scrolled before sticky
  backdropBlur: '10px',
  backgroundColor: 'rgba(255, 248, 245, 0.85)',
  
  // RULE 2: Active state management
  activeIndicator: {
    height: '2px',
    color: 'var(--color-accent)',
    animation: 'slideIn 400ms ease',
  },
  
  // RULE 3: Mobile menu requirements
  mobileBreakpoint: 768,
  hamburgerSize: 44, // Touch target minimum
  overlayAnimation: 'fadeIn 300ms ease',
  
  // RULE 4: Accessibility requirements
  ariaLabels: {
    menu: 'Main navigation',
    hamburger: 'Toggle menu',
    close: 'Close menu',
  }
};

export const ProjectCardSafeguards = {
  // RULE 1: Image handling
  imageAspectRatio: '16/10',
  imageFit: 'cover',
  lazyLoading: true,
  placeholderBlur: '20px',
  
  // RULE 2: Hover states
  hoverScale: 1.03,
  hoverShadow: '0 12px 32px rgba(0, 0, 0, 0.08)',
  hoverDuration: '300ms',
  
  // RULE 3: Content requirements
  requiredFields: ['title', 'client', 'year', 'heroImage', 'tags'],
  maxTags: 3,
  titleMaxLength: 60,
  
  // RULE 4: Grid behavior
  gridColumns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  gridGap: '32px',
};

export const TypographySafeguards = {
  // RULE 1: Paragraph composition
  paragraphRules: {
    maxSentences: 3,
    maxCharacters: 280,
    structure: ['hook', 'detail', 'transition'],
  },
  
  // RULE 2: Heading hierarchy
  headingRules: {
    h1: { min: 48, max: 80, lineHeight: 1.1 },
    h2: { min: 36, max: 56, lineHeight: 1.2 },
    h3: { min: 24, max: 40, lineHeight: 1.3 },
    body: { min: 16, max: 18, lineHeight: 1.6 },
  },
  
  // RULE 3: Line length
  maxLineLength: 75, // characters
  maxLineWidth: '680px',
  
  // RULE 4: Font loading
  fontDisplay: 'swap',
  fallbackStack: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
};

export const PerformanceSafeguards = {
  // RULE 1: Image optimization
  imageOptimization: {
    formats: ['webp', 'jpg'],
    sizes: [320, 768, 1024, 1440, 1920],
    quality: 85,
    lazyLoadOffset: '50px',
  },
  
  // RULE 2: Bundle limits
  bundleLimits: {
    initialJS: 200, // KB
    initialCSS: 50, // KB
    totalSize: 500, // KB
  },
  
  // RULE 3: Loading priorities
  loadingPriorities: {
    criticalCSS: 'inline',
    fonts: 'preload',
    heroImages: 'eager',
    belowFold: 'lazy',
  },
  
  // RULE 4: Performance metrics
  requiredMetrics: {
    LCP: 2.5, // seconds
    FID: 100, // milliseconds
    CLS: 0.1, // score
    lighthouse: 90, // minimum score
  },
};

export const AnimationSafeguards = {
  // RULE 1: Scroll animations
  scrollAnimations: {
    threshold: 0.2, // 20% visible before trigger
    staggerDelay: 100, // ms between elements
    maxDuration: 800, // ms maximum
  },
  
  // RULE 2: Reduced motion support
  reducedMotion: {
    check: 'prefers-reduced-motion',
    fallback: 'opacity-only',
    duration: '0ms',
  },
  
  // RULE 3: Custom cursor
  customCursor: {
    size: { default: 20, hover: 40 },
    magneticRadius: 50,
    blendMode: 'difference',
    hideOnTouch: true,
  },
  
  // RULE 4: Performance optimization
  optimization: {
    useTransform: true,
    useOpacity: true,
    avoidLayout: ['width', 'height', 'top', 'left'],
    useGPU: 'will-change: transform',
  },
};

export const AccessibilitySafeguards = {
  // RULE 1: Color contrast
  contrastRequirements: {
    normalText: 4.5,
    largeText: 3.0,
    interactive: 3.0,
  },
  
  // RULE 2: Focus management
  focusManagement: {
    outlineWidth: '2px',
    outlineColor: 'var(--color-accent)',
    outlineOffset: '2px',
    skipLinks: true,
  },
  
  // RULE 3: ARIA implementation
  ariaRequirements: {
    landmarks: ['main', 'nav', 'footer'],
    liveRegions: ['polite', 'assertive'],
    labeledElements: ['form', 'button', 'link'],
  },
  
  // RULE 4: Keyboard navigation
  keyboardNav: {
    tabIndex: [0, -1],
    escapeClose: true,
    arrowNavigation: true,
    enterActivation: true,
  },
};

export const ContentSafeguards = {
  // Required sections for projects
  requiredSections: ['context', 'approach', 'outcome'],
  
  // Tag system
  tagLimits: {
    industry: 1,
    services: 3,
    skills: 3,
  },
  
  // Image naming
  imageNaming: {
    pattern: /^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/,
    maxLength: 50,
  },
  
  // Content length
  contentLength: {
    title: { min: 10, max: 60 },
    subtitle: { min: 20, max: 120 },
    paragraph: { min: 50, max: 280 },
  },
};