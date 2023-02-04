/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(18 18 18)",
        secondary: "#252525",
        pink: "rgb(255 59 92)",
      },
    },
  },
  plugins: [],
};
