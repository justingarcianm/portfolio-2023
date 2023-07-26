/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Bebas Neue"', "cursive"],
      },
      colors: {
        primary: "#E0DDCF",
        accent: "#E34A6F",
        "primary-dark": "#495159",
        "accent-dark": "#00A7E1",
      },
      keyframes: {
        typing: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 1s ease infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
