import { css } from "styled-components";

const navButtonStyle = css`
  width: 10rem;
  ${({ theme: { fontStyles } }) => fontStyles.nav}

  &:hover {
    ${({ theme: { colors, whitespace } }) => `
      background-color: ${colors.black};
      border-radius: ${whitespace.default};
      color: ${colors.white};
    `}
  }
`;
export default navButtonStyle;
