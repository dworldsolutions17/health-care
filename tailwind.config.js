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
          50: '#e6f3fb',
          100: '#c2e1f5',
          200: '#9acdee',
          300: '#72b9e7',
          400: '#53aae2',
          500: '#1767C3',
          600: '#145db5',
          700: '#1152a4',
          800: '#0e4893',
          900: '#083774',
        },
        secondary: {
          50: '#e8f7ef',
          100: '#c6ebd7',
          200: '#a0debc',
          300: '#7ad1a1',
          400: '#5ec78d',
          500: '#21A85A',
          600: '#1e9952',
          700: '#198848',
          800: '#14773e',
          900: '#0c582d',
        },
      },
    },
  },
  plugins: [],
}
