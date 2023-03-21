/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        wave: {
          "from, to": {
            transform: "rotate(0) scale(1)",
          },
          "25%, 50%, 75%": {
            filter:
              "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
          },
          "25%": {
            transform: "rotate(12deg) scale(1.2)",
          },
          "50%": {
            transform: "rotate(-12deg) scale(1.2)",
          },
          "75%": {
            transform: "rotate(6deg) scale(1.2)",
          },
        },
        shine: {
          to: {
            backgroundPosition: "right",
            transform: "rotateY(0) rotateZ(0) scale(1)",
            filter: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
