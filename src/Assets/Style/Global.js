import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { F_center, Color } from './Common';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${Color.backGroundGray};
  }

  #root{
    ${F_center}
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export default GlobalStyle;
