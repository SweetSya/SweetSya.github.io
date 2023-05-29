/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "public/*.{html,js}",
    "src/*.{html,js}",
    "*.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playFair : ["Playfair Display"],
      },
      backgroundColor: {
        color_light : "#EEEE",
        color_dark : "#444547"
      },
      colors: {
        color_light : "#EEEE",
        color_dark : "#444547"
      },
    },
  },
  plugins: [
  
  ]

}

