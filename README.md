# Silvana Restrepo - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a sophisticated design system.

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── common/         # Navigation, Footer
│   │   ├── sections/       # Page sections
│   │   └── projects/       # Project components
│   ├── data/              # Project data
│   ├── pages/             # Next.js pages
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── public/                # Static assets
│   └── images/           # Project images
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Pink:** #FFB3B3
- **Primary Coral:** #FF7A7A
- **Primary Dark:** #2B2B2B
- **Primary Gray:** #6B6B6B
- **Background Cream:** #FFF8F3
- **Background Pink:** #FFE4E4

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Key Features
- Responsive design for all devices
- Smooth scroll animations
- Project carousel with filtering
- Interactive expertise showcase
- Professional timeline
- Dynamic project detail pages

## 📸 Adding Images

Place your images in the appropriate folders:
- Hero images: `/public/images/hero/`
- Project images: `/public/images/projects/[project-name]/`
- About section: `/public/images/about/`

Update the image references in:
- `/src/data/projects.ts` for project images
- Component files for section images

## 🛠️ Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Swiper** - Carousel functionality

## 📝 Customization

### Update Content
1. Edit project data in `/src/data/projects.ts`
2. Modify section content in respective component files
3. Update personal information in the About section

### Styling
- Global styles: `/src/styles/globals.css`
- Tailwind config: `/tailwind.config.js`
- Component-specific styles are inline with Tailwind classes

## 🚢 Deployment

Build for production:
```bash
npm run build
npm start
```

The site is optimized for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2025 Silvana Restrepo. All rights reserved.