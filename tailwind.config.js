/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        blink: "blink 1s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "100%" },
          "50%, 100%": { opacity: "0%" },
        },
      },
      fontSize: {
        "icon-lg": "150px",
        "icon-sm": "120px",
      },
    },
  },
  plugins: [],
};
