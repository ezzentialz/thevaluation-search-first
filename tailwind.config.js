/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#091138', 900: '#0B1640', 800: '#0E1B4D', 700: '#14246B' },
        royal: '#2F3B94',
        gold: { DEFAULT: '#B08D3C', dark: '#80611A' },
        mist: '#F3F4F7',
        ink: '#1A2040',
        slate2: '#4A5072',
      },
      fontFamily: {
        display: ['"Playfair Display"', '"Noto Serif Thai"', 'Georgia', 'serif'],
        sans: ['Inter', 'Sarabun', 'system-ui', '"Segoe UI"', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
