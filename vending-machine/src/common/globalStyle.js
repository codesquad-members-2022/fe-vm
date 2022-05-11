import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family:"Times New Roman", Dotum, "돋움", serif, sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;
