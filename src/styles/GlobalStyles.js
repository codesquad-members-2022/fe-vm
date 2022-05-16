import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
