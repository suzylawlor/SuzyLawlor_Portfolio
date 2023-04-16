/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        blob: "blob 10s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(3)",
          },
          "33%": {
            transfrom: "translate(120px, -20px) scale(3.2)",
          },
          "66%": {
            transform: "translate(-20px, 120px) scale(3.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(3)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
