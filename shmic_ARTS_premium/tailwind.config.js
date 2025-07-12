
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shmicGold: "#c59a00",
        shmicGreen: "#0a4505",
        shmicCream: "#f5ecc5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
