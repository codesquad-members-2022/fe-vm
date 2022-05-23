const colors = {
  black: "#1e1e1e",
  white: "#fff",
  red: "#fe001a",
  darkblue: "#006ba8",
  green: "#008000",
  gray: "#999",
};

const whitespace = {
  default: "1rem",
  small: "0.5rem",
};

const sizes = {
  button: {
    height: "3rem",
  },
};

const borders = {
  bold: `2px solid ${colors.black}`,
  normal: `1px solid ${colors.black}`,
};

const fontSizes = {
  normal: "1.1rem",
  large: "1.3rem",
  extraLarge: "2rem",
};

const fontWeights = {
  mediumBold: "600",
  bold: "800",
};

const fontStyles = {
  nav: {
    fontSize: "1.5rem",
    lineHeight: "3rem",
    color: colors.black,
    fontWeight: fontWeights.bold,
  },
  buttons: {
    large: {
      fontSize: "1.3rem",
      color: colors.white,
      fontWeight: fontWeights.mediumBold,
    },
    small: {
      fontSize: "1.1rem",
      color: colors.black,
    },
  },
};

const theme = {
  whitespace,
  borders,
  colors,
  sizes,
  fontStyles,
  fontSizes,
  fontWeights,
};

export default theme;
