import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: inline-block;

  .current-path {
    ${({ theme: { colors, whitespace } }) => `
      padding-bottom: ${whitespace.small};
      border-bottom: 4px solid ${colors.black};
    `}

    &:hover {
      border: 0;
    }
  }
`;

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

export { Wrapper, navButtonStyle };
