import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Noto Sans KR;
    color: #1B1B1B;
  }

  li {
    list-style-type: none;
  }

  a {
    color: #1B1B1B;
    text-decoration: none;
  }
`;

export default GlobalStyles;
