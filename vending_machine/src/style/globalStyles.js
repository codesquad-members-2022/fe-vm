import { createGlobalStyle } from 'styled-components';
import reset from 'reset-css';

const GlobalStyle = createGlobalStyle`
    ${reset}; 
    * {
      font-family: 'Noto Sans KR', sans-serif;
      line-height: 1.4;
    }

    body {
      background-color: #eee;
    }

    button{
      background: none;
      cursor: pointer;
      margin: 0 auto;
      border: none;
    }

`;

export default GlobalStyle;
