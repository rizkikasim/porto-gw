/** @type {import('tailwindcss').Config} */
export default {
  // Mengaktifkan fitur dark mode berbasis class HTML
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00AA97', // Warna Primary lu
          hover: '#009685',   // Warna Primary Hover lu
        }
      }
    },
  },
  plugins: [],
}