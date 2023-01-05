/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/*.css"
  ],
  theme: {
    extend: {
      colors: {
        "brand-50": "#E1F7F3",
        "brand-100": "#D1F3ED",
        "brand-200": "#B0EAE0",
        "brand-300": "#90E1D3",
        "brand-400": "#70D9C7",
        "brand": "#50D0BA",
        "brand-600": "#31B7A0",
        "brand-700": "#258B79",
        "brand-800": "#195E52",
        "brand-900": "#0D322C",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        courgette: ["Courgette", "cursive"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: "base"
    }),
  ],
}
