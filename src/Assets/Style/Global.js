import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { Color } from './Common';

const GlobalStyle = createGlobalStyle`
  ${reset}
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  html{
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  body{
    background-color: ${Color.black};
  }
  button{
    cursor: pointer;
    outline: none;
};

  #root{
    display: flex;
    align-items:center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
