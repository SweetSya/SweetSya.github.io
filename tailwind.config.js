/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playFair : ["Playfair Display"]
      },
      backgroundColor: {
        color_light : "#E1E5EA",
        color_dark : "#444547"
      },
      colors: {
        color_light : "#E1E5EA",
        color_dark : "#444547"
      }
    },
  },
  plugins: [],
}

