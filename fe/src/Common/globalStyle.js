import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    .App {
      width: 1100px;
      margin:10px auto;
      padding: 50px 0;
      box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);
    }
`;

export default GlobalStyle;
