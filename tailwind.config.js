/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          50: '#E6EAF0',
          100: '#C2CAD8',
          200: '#95A3BE',
          300: '#5C6E94',
          400: '#2E436E',
          500: '#0A1628',
          600: '#08111F',
          700: '#060D18',
          800: '#040A12',
          900: '#02060C',
        },
        electric: {
          DEFAULT: '#1E6FD9',
          50: '#EAF2FC',
          100: '#CFE0F8',
          200: '#9CC2F0',
          300: '#5E9BE3',
          400: '#2E7FDC',
          500: '#1E6FD9',
          600: '#1755B0',
          700: '#114488',
          800: '#0C3366',
          900: '#082449',
        },
        amber: {
          DEFAULT: '#F5A623',
          50: '#FDF3E2',
          100: '#FAE2B6',
          200: '#F7CB80',
          300: '#F4B74D',
          400: '#F5A623',
          500: '#D98C12',
          600: '#A86B0B',
          700: '#7A4D08',
          800: '#4D3105',
          900: '#261A03',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-in': {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-down': 'slide-down 0.25s ease-out forwards',
        'toast-in': 'toast-in 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
