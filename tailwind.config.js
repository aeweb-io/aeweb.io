/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-dark": "#272727",
        "aeweb-green": "#005249",
      },
    },
    fontFamily: {
      sans: ["var(--raleway-font)", ...fontFamily.sans],
    },
  },
  plugins: [],
}
