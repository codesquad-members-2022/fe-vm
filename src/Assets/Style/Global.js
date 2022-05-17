import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { F_center, Color } from './Common';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 10px;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${Color.backGroundGray};
  }
  button{
    cursor: pointer;
    outline: none;
};

  #root{
    ${F_center}
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
