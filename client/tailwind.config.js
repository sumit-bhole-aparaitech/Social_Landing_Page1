/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#222222',       // New dark color for text (replacing black)
        'brand-navy': '#1a237e',       // New accent for sections (replacing black blocks)
        'brand-gold': '#D4AF37',
        'brand-gold-hover': '#B4941F',
        'brand-light-gray': '#f8f9fa', // For subtle backgrounds
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}