import styled, { css } from "styled-components";

const ProductUl = styled.ul`
  ${({ theme: { whitespace, colors } }) => css`
    padding: ${whitespace.default};
    border-radius: ${whitespace.default};
    background-color: ${colors.white};
    grid-gap: ${whitespace.small};
  `};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export default ProductUl;
