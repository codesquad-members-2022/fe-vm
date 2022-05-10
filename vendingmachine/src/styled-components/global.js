import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    color: #1B1B1B;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Noto Sans KR;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
