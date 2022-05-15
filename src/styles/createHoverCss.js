const createHoverCss = ({ bgColor, textColor }) => {
  const baseCss = `
          ${bgColor ? `background-color:${bgColor.base};` : ''}
          ${textColor ? `color:${textColor.base};` : ''}
      `;
  const hoverCss = `
          &:hover{
              ${bgColor ? `background-color:${bgColor.hover};` : ''}
              ${textColor ? `color:${textColor.hover};` : ''}
          }
      `;
  const transitionCss = [
    bgColor ? 'background-color 0.2s' : '',
    textColor ? 'color 0.2s' : '',
  ]
    .filter(Boolean)
    .join(',');

  return `
          transition: ${transitionCss};
          ${baseCss}
          ${hoverCss}
      `;
};
export default createHoverCss;
