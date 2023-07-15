/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        nunito: " 'Nunito', sans-serif  ",
        quicksand: " 'Quicksand', sans-serif ",
        roboto: "  'Roboto', sans-serif ",
      },
      colors: {
        primary: "#2d1268",
        secondary: "#fd5056",
        third: "#1f3347",
      },
    },
  },

  plugins: [require("daisyui")],
};

