/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jigglypuff-pink': {
          50: '#fef2f2',
          100: '#fde8e8',
          200: '#fcd4d4',
          300: '#fab3b3',
          400: '#f78787',
          500: '#f06262',
          600: '#e63946',
          700: '#d62839',
          800: '#b91c2c',
          900: '#991b1b',
        },
      },
      backgroundImage: {
        'gradient-magical': 'linear-gradient(135deg, #fef2f2 0%, #fde8e8 50%, #fcd4d4 100%)',
        'gradient-soft': 'linear-gradient(180deg, #ffffff 0%, #fef2f2 100%)',
      },
      boxShadow: {
        'floating': '0 10px 40px rgba(246, 98, 98, 0.15)',
        'floating-lg': '0 20px 60px rgba(246, 98, 98, 0.2)',
      },
    },
  },
  plugins: [],
}

