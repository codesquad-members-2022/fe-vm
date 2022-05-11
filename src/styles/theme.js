const colors = {
  black: "#1e1e1e",
  white: "#fff",
  red: "#fe001a",
  darkblue: "#006ba8",
  green: "#008000",
};

const whitespace = {
  default: "1rem",
  small: "0.5rem",
};

const borders = {
  bold: `2px solid ${colors.black}`,
};

const fontStyles = {
  nav: {
    size: "1.5rem",
    lineHeight: "3rem",
    color: colors.black,
    fontWeight: 800,
  },
  buttons: {
    large: {
      size: "1.3rem",
      color: colors.white,
      fontWeight: 600,
    },
    small: {
      size: "1.1rem",
      color: colors.black,
    },
  },
  normal: "1.1rem",
  large: "1.3rem",
};

const theme = { whitespace, borders, colors, fontStyles };

export default theme;
