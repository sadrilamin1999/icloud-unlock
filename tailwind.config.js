/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Montserrat", "sans-serif"],
        custom2: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
