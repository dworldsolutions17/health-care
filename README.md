# Healthcare Website

A modern, responsive healthcare website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

### 🏥 Complete Healthcare Solution
- **Header & Navigation**: Smooth scrolling navigation with mobile-responsive menu
- **Hero Section**: Eye-catching banner with key statistics and CTAs
- **About Us**: Mission, vision, and company story
- **Services**: Comprehensive healthcare services and community impact programs
- **Doctor Enrollment**: Professional network registration form
- **E-commerce**: Health devices and organic products store
- **Testimonials**: Patient and doctor success stories
- **Contact**: Contact form, location map, and social media links
- **Footer**: Newsletter signup, quick links, and company information

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd health-care
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually http://localhost:5173)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
health-care/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About Us section
│   │   ├── Services.tsx   # Services section
│   │   ├── Doctors.tsx    # Doctor enrollment
│   │   ├── Ecommerce.tsx  # E-commerce section
│   │   ├── Testimonials.tsx # Success stories
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer section
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles with Tailwind
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* your colors */ },
  secondary: { /* your colors */ }
}
```

### Content
Update component files in `src/components/` to modify text, images, and functionality.

### Images
Replace placeholder Unsplash images with your own by updating the image URLs in component files.

## Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be in the `dist/` directory, ready to deploy to any static hosting service.

---

Built with ❤️ for Healthcare Excellence
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
