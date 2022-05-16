import { createGlobalStyle } from "styled-components";
import BMDoHyeon from "./BMDoHyeon.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "BMDoHyeon";
        src: local("BMDoHyeon"),
        url(${BMDoHyeon}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;
