import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { css } from "styled-components";

export const CenterSort = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WidthSort = css`
  display: flex;
  justify-content: center;
`;

export const HeightSort = css`
  display: flex;
  align-items: center;
`;
const GlobalStyles = createGlobalStyle`
    ${reset}
    button {
        background: none;
        border:none;
}
`;
export default GlobalStyles;
