import { createGlobalStyle } from 'styled-components';
import { Color } from './Assets/Common.style';

export const GlobalStyles = createGlobalStyle`
  html, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    color: ${Color.BLACK};
  }

  body {
    min-height: 100vh;
    padding: 52px 0 30px;
    background: ${Color.BACKGROUND};
  }
`;
