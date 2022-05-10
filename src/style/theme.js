const fontSize = {
  xLarge: '3em',
  large: '2em',
  medium: '1.5em',
  small: '14px',
  xSmall: '12px',
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
  flexMixin: (direction = 'row', align = 'center', justify = 'center') => `
    display:flex;
    flex-direction:${direction};
    align-items:${align};
    justify-content:${justify}
    `,
};

const theme = {
  fontSize,
  fontWeight,
  colors,
  mixin,
};

export default theme;
