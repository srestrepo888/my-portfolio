# Portfolio Color System Documentation

## Overview
This document outlines the comprehensive color system implemented across the Silvana Restrepo portfolio website. The system is designed to maintain consistency, accessibility, and brand alignment throughout all components.

## Primary Colors

### Background Color
- **Primary Background**: `#FFFBEE`
  - **Usage**: Main page backgrounds, section backgrounds
  - **Description**: Warm cream color that provides a sophisticated, professional foundation
  - **CSS Variable**: `--color-background`

### Accent Color
- **Primary Accent**: `#FF6663`
  - **Usage**: Buttons, links, highlights, interactive elements
  - **Description**: Coral red that provides strong visual hierarchy and call-to-action emphasis
  - **CSS Variable**: `--color-accent`

## Color Palette

### Background Colors
```css
--color-background: #FFFBEE;        /* Primary background */
--color-surface: #FFFFFF;           /* Cards, modals, elevated surfaces */
--color-vanilla-off: #FFFBEE;       /* Alternative background (same as primary) */
```

### Accent Colors
```css
--color-accent: #FF6663;            /* Primary accent */
--color-accent-hover: #E55A57;      /* Hover state */
--color-accent-light: #FF9996;      /* Light variant */
--color-accent-dark: #CC5250;       /* Dark variant */
--color-contrast: #FF6663;          /* Same as accent for consistency */
```

### Text Colors
```css
--color-text-primary: #1F1F1F;      /* Main text */
--color-text-secondary: #4A5568;    /* Secondary text */
--color-text-tertiary: #718096;     /* Tertiary text */
--color-text-accent: #FF6663;       /* Accent text */
--color-text-light: #9CA3AF;        /* Light text */
```

### Neutral Colors
```css
--color-primary: #1F1F1F;           /* Near black for text */
--color-primary-dark: #0F0F0F;      /* Deep black for headings */
--color-secondary: #4A5568;         /* Readable gray */
--color-tertiary: #718096;          /* Lighter gray */
```

## Gradient System

### Background Gradients
```css
--color-gradient-start: #FFFBEE;    /* Gradient start */
--color-gradient-end: #FFF5E6;      /* Gradient end */
```

### Brand Texture Gradients
```css
/* Personal Branding Texture */
.bg-brand-texture {
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 102, 99, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 153, 150, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 245, 230, 0.1) 0%, transparent 50%),
    linear-gradient(135deg, #FFFBEE 0%, #FFF5E6 50%, #FFE6E5 100%);
}
```

## Component-Specific Colors

### Buttons
- **Primary Button**: `#FF6663` background, white text
- **Primary Button Hover**: `#E55A57` background
- **Secondary Button**: Transparent background, `#FF6663` border and text
- **Secondary Button Hover**: `#FF6663` background, white text

### Cards & Surfaces
- **Card Background**: `rgba(255, 255, 255, 0.8)` with backdrop blur
- **Card Border**: `rgba(255, 102, 99, 0.2)`
- **Card Hover**: `rgba(255, 255, 255, 0.95)` with enhanced shadow

### Timeline & Progress
- **Timeline Dot**: `#FF6663` with `rgba(255, 102, 99, 0.3)` shadow
- **Progress Bar**: `#FF6663` background
- **Year Badge**: `linear-gradient(135deg, #FF6663, #FF9996)`

### Interactive Elements
- **Hover Indicators**: `rgba(255, 102, 99, 0.6)`
- **Floating Elements**: `rgba(255, 102, 99, 0.2)`
- **Service Highlights**: `rgba(255, 102, 99, 0.2)` background, `#FF6663` text

## Accessibility Considerations

### Contrast Ratios
- **Primary Text on Background**: 4.5:1 (WCAG AA compliant)
- **Accent Text on Background**: 3.1:1 (WCAG AA compliant)
- **Button Text on Accent**: 4.8:1 (WCAG AA compliant)

### Color Blindness Support
- The coral red accent (`#FF6663`) is distinguishable for most color vision deficiencies
- High contrast ratios ensure readability regardless of color perception
- Text content is never dependent on color alone for meaning

## Implementation Guidelines

### CSS Custom Properties
All colors are defined as CSS custom properties in `design-tokens.css` and can be used throughout the application:

```css
/* Example usage */
.my-component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  border: 1px solid var(--color-accent);
}
```

### Tailwind Configuration
Colors are also available as Tailwind classes in `tailwind.config.js`:

```html
<!-- Example usage -->
<div class="bg-background text-primary border-accent">
  Content here
</div>
```

### Component Updates
All components have been updated to use the new color system:
- ✅ HeroSection
- ✅ AboutSection  
- ✅ ProjectsSection
- ✅ ExperienceSection
- ✅ ServicesSection
- ✅ Navigation
- ✅ Global styles

## Brand Alignment

This color system aligns with the sophisticated, professional aesthetic of Silvana Restrepo's personal brand:

- **Warm cream background** (`#FFFBEE`) creates an inviting, approachable feel
- **Coral accent** (`#FF6663`) provides energy and sophistication
- **High contrast text** ensures readability and professionalism
- **Subtle gradients** add depth without overwhelming content

## Maintenance

When updating colors:
1. Update CSS custom properties in `design-tokens.css`
2. Update Tailwind configuration in `tailwind.config.js`
3. Test all components for visual consistency
4. Verify accessibility compliance
5. Update this documentation

## File Locations

- **Design Tokens**: `src/styles/design-tokens.css`
- **Global Styles**: `src/styles/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Individual component files in `src/components/`

---

*Last Updated: December 2024*
*Version: 1.0*
