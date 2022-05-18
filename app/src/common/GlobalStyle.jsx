import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle` 
  ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }

    *{
        box-sizing: border-box;
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    li {
      list-style: none;
      padding: 0;
    }

    table {
      text-align: center;
      border-collapse: collapse;
      border: 1px solid ${({ theme }) => theme.color.color_200}
    }

    th, td {
      padding: 20px;
      border: 1px solid ${({ theme }) => theme.color.color_200}
    }
`;

export default GlobalStyle;
