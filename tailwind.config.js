/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        body: ['Poppins'],
      },
      screens: {
        "3xl": "2000px"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
