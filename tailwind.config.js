/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ec',
          100: '#f9efc5',
          200: '#f4df8a',
          300: '#e6c658',
          400: '#d4af37',
          500: '#b8960f',
          600: '#96780b',
          700: '#735c08',
          800: '#4e3f06',
          900: '#2b2203',
        },
        surface: {
          black: '#000000',
          dark:  '#080808',
          card:  '#101010',
          elevated: '#181818',
          border: '#242424',
          hover: '#1c1c1c',
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.7s ease forwards',
        'leak-ping': 'leakPing 2s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
        'scan':      'scan 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        leakPing: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '1' },
          '50%':      { transform: 'scale(1.6)', opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        scan: {
          '0%':   { transform: 'translateY(0%)',   opacity: '0.6' },
          '50%':  { transform: 'translateY(100%)', opacity: '1' },
          '100%': { transform: 'translateY(0%)',   opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
