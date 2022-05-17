import styled, { css } from "styled-components";

const Wrapper = styled.ol`
  ${({ theme: { fontSizes, colors, whitespace } }) => css`
    font-size: ${fontSizes.normal};
    background-color: ${colors.black};
    color: ${colors.white};
    padding: ${whitespace.default};
  `};
  height: calc(100% - 10rem);
  max-height: calc(100% - 10rem);
  overflow-y: auto;

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export default Wrapper;
