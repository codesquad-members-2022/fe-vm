import { createGlobalStyle } from 'styled-components';
import normalize from './normalize.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap');
    ${normalize}; 
    * {
    font-family: 'Nanum Pen Script', cursive;
    }

    button{
      background: none;
      cursor: pointer;
      margin: 0 auto;
      border: none;
    }
`;

export default GlobalStyle;
