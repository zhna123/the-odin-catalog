/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'odin-gold': '#e3b260',
        'odin-light-gray': '#e6e6e6',
        'odin-gray': '#d5d5d5',
        'odin-text': '#353535'
      }
    },
  },
  plugins: [],
}

