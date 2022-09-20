/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "380px",
        md: "800px",
        lg: "1300px",
      },
      spacing: {
        big: "48rem",
      },
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
