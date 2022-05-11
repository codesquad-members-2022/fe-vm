import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { fontStyles, colors, whitespace } }) => css`
    font-size: ${fontStyles.normal};
    background-color: ${colors.black};
    color: ${colors.white};
    padding: ${whitespace.default};
  `};
  height: calc(100% - 10rem);
  max-height: calc(100% - 10rem);
  overflow-y: auto;
`;

export default Wrapper;
