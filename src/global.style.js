import { createGlobalStyle } from 'styled-components';
import { Color, F_Center } from './Assets/Common.style';

export const GlobalStyles = createGlobalStyle`
  html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    color: ${Color.BLACK};
  }

  body {
    ${F_Center}
    min-height: 100vh;
    padding: 10px 0;
    background: ${Color.BACKGROUND};
  }
`;
