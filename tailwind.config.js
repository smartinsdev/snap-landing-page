/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "epilogue": ['Epilogue', 'sans-serif']
    },
    extend: {
      colors: {
      "almost-black": "hsl(0, 0%, 8%)",
      "almost-white": "hsl(0, 0%, 98%)",
      "medium-gray": "hsl(0, 0%, 41%)"
    },
      keyframes: {
        "enter-dropdown": {
          "from": {
            transform: "scale(0.90) translateY(-20px)",
            opacity: 0
          },
          "to": {
            transform: "scale(1) translateY(0)",
            opacity: 1
          }
        },
        "enter-orvelay-menu": {
          "from": {
            opacity: 0,
          },
          "to": {
            opacity: 1,
          }
        },
      },
      animation: {
        "enter-dropdown": "enter-dropdown .3s ease-out",
        "enter-orvelay-menu": "enter-orvelay-menu .2s ease-in",
      },
      maxWidth: {
        "readable": "45ch"
      }
    },
  },
  plugins: [],
}
