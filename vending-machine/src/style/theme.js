import { darken, lighten } from "polished";

const theme = {
  colors: {
    blue: "#228be6",
    gray: "#495057",
    lightBlue: `${lighten(0.1, "#228be6")}`,
    darkBlue: `${darken(0.1, "#228be6")}`,
    lightGray: `${lighten(0.1, "#495057")}`,
    darkGray: `${darken(0.1, "#495057")}`,
    white: "#ffffff",
  },
};

export default theme;
