module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      starbucks: "#1B3C35",
      "starbucks-light": "#14ae5c",
      "starbucks-dark": "#015236",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "gray-white": "#f1f5f9",
    },
    fontFamily: {
      main: ["Noto Sans KR", "sans-serif"],
    },
    extend: {
      scale: {
        120: "1.2",
      },
    },
  },
  variants: {},
  plugins: [],
};
