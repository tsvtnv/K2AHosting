/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        royal: {
          400: '#9d7ad2',
          500: '#8b63c7',
          600: '#7851A9', // Royal Purple base
          700: '#643f91',
          800: '#523478',
          900: '#3e265c',
        },
        gold: {
          300: '#ffe566',
          400: '#ffd700', // Gold Base
          500: '#e6c200',
          600: '#cca300',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}