/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#00030F",
        nearBlack: "#00030F",
        lightGray: "#CFBFD9",
      },
      // textsize
      fontSize: {
        xsm: "13px",
      },
      letterSpacing: {
        big: "0.31em",
      },
      lineHeight: {
        mega: "2.5",
      }
    },
  },
  plugins: [],
};
