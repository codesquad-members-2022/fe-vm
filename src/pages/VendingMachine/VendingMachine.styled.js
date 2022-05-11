import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ProductListWrapper = styled.div`
  ${({ theme: { whitespace, colors, borders } }) => css`
    padding: ${whitespace.default};
    margin-right: ${whitespace.default};
    background-color: ${colors.red};
    border: ${borders.bold};
  `};

  width: 60%;
`;

const ProgressWrapper = styled.div`
  ${({ theme: { whitespace, borders } }) => css`
    padding: ${whitespace.default};
    border: ${borders.bold};
  `};

  width: 40%;
  height: 100%;
`;

export { Wrapper, ProductListWrapper, ProgressWrapper };
