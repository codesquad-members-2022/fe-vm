import { createGlobalStyle } from 'styled-components';
import normalize from './normalize.css';

const GlobalStyle = createGlobalStyle`
    ${normalize}; 

    button{
      background: none;
      cursor: pointer;
      margin: 0 auto;
      border: none;
    }
`;

export default GlobalStyle;
