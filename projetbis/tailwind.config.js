/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'shadow-t':'0 3px 5px gray',
      }
    },
  },
  plugins: [],
}
