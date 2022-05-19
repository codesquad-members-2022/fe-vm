const fontSize = {
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
};

const color = {
  white: '#fff',
  black: '#000',
  lightBlack: '#0002',
  primaryBlack: '#0003',
  darkBlack: '#0004',
  orange: '#ff9810',
  lightOrange: '#ff981022',
  primaryOrange: '#ff981055',
  darkOrange: '#ff981033',
  red: '#ee4646',
  lightRed: '#fdb6b677',
  primaryRed: '#fdb6b6',
  darkRed: '#fdb6b699',
  disabled: '#ff233d',
  purchasable: '#93ff3c',
};

const mixin = {
  flexbox: (dir = 'row', jc = 'center', ai = 'center') => `
    display: flex;
    flex-direction: ${dir};
    justify-content: ${jc};
    align-items: ${ai};
  `,
};

const theme = {
  color,
  fontSize,
  mixin,
};

export type Color = typeof color;
export type FontSize = typeof fontSize;
export type Mixin = typeof mixin;

export default theme;
