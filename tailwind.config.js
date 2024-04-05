/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.js",
    "./pages/**/*.js",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),('flowbite/plugin')
  ],
}

