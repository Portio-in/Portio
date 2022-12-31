/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#50d0ba",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        courgette: ["Courgette", "cursive"],
      },
    },
  },
  plugins: [],
}
