import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 10px;
}
a {
    color: black;
    &:link,
    &:visited,
    &:hover,
    &:active {
        text-decoration: none;
        color: black;
    }
}
ul, ol {
    list-style: none;
}
p {
    font-size: 1.4rem;
}
`;

export default GlobalStyle;
