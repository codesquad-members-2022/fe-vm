import styled, { createGlobalStyle } from "styled-components";

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
    ul,
    ol {
        list-style: none;
    }
    p,
    span {
        font-size: 1.4rem;
    }
    input {
        font-size: 1.4rem;
        border: none;
        &:focus {
            outline: none;
        }
    }
`;

const RoundBorder = styled.div`
    border: 1px solid black;
    border-radius: 10px;
`;

export { GlobalStyle, RoundBorder };
