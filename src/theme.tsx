const colors = {
  gray1: '#434343',
  white: '#ffffff',
  ultramarine: '#7BCEEF',
};

const mixins = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
   display: flex;
   flex-direction: ${direction};
   align-items: ${align};
   justify-content: ${justify};
 `,
};

const theme = { colors, mixins };

export default theme;
