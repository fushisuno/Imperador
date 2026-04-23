/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1917',
        secondary: '#44403C',
        cta: '#CA8A04',
        'cta-light': '#EAB308',
        background: '#FAFAF9',
        text: '#0C0A09',
        gold: '#CA8A04',
        'gold-light': '#EAB308',
        'gold-dark': '#A16207',
        black: '#0C0A09',
        white: '#FAFAF9',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}