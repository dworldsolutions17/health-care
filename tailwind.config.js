/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2fb',
          100: '#c3dff5',
          200: '#9acbef',
          300: '#71b7e9',
          400: '#52a8e5',
          500: '#1F6AE1', // Secondary Blue - Tech, AI, Telemedicine
          600: '#1b5ec9',
          700: '#1752b1',
          800: '#134699',
          900: '#0d3474',
        },
        secondary: {
          50: '#e8f7ef',
          100: '#c6ebd7',
          200: '#a0debc',
          300: '#7ad1a1',
          400: '#5ec78d',
          500: '#21A85A', // Primary Green - Health, Trust
          600: '#1e9952',
          700: '#198848',
          800: '#14773e',
          900: '#0c582d',
        },
        accent: {
          50: '#ecfbff',
          100: '#d5f5ff',
          200: '#b3edff',
          300: '#81e4ff',
          400: '#38BDF8', // AI Highlights
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'soft-bg': '#F7FAF9',
        'dark-text': '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['52px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
