import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { fontSizes, colors, whitespace } }) => css`
    font-size: ${fontSizes.normal};
    background-color: ${colors.black};
    color: ${colors.white};
    padding: ${whitespace.default};
  `};

  height: calc(100% - 11.5rem);
  max-height: calc(100% - 11.5rem);
  overflow-y: auto;
`;

const ProgressList = styled.ol`
  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export { Wrapper, ProgressList };
