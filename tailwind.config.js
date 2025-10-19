/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        higgs: {
          bg: "#111111",
          surface: "#1C1C1C",
          accent: "#8A2BE2",
          glow: "#FF00FF",
          text: "#A0A0A0",
        },
      },
    },
  },
  plugins: [],
};
  