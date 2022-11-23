/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#188AEC",
        customInk: "#1F2937",
        customBlack: "#4B5563",
      },
      fontFamily: {
        Space: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
