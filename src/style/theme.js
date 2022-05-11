import { css } from 'styled-components';

const fontSize = {
  xLarge: '3em',
  large: '2em',
  medium: '1.5em',
  small: '1em',
};

const fontWeight = {
  xBold: 900,
  bold: 700,
  sBold: 500,
  regular: 400,
};

const colors = {
  grey: '#EFEFEF',
  navy: '#205375',
  deepNavy: '#112B3C',
  orange: '#F66B0E',
};

const mixin = {
  flexMixin: (
    direction = 'row',
    align = 'center',
    justify = 'center',
    wrap = 'no-wrap'
  ) => {
    return css`
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content: ${justify};
      flex-wrap: ${wrap};
    `;
  },
};

const theme = {
  fontSize,
  fontWeight,
  colors,
  mixin,
};

export default theme;
