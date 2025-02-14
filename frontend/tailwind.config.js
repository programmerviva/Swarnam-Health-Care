/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4267B2'
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(179.7px, 1fr))'
      }
    },
  },
  plugins: [],
}