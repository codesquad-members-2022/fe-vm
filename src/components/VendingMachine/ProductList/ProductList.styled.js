import styled, { css } from "styled-components";

const ProductUl = styled.ul`
  ${({ theme: { whitespace, colors } }) => css`
    padding: ${whitespace.default};
    border-radius: ${whitespace.default};
    background-color: ${colors.white};
  `};

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
`;

export default ProductUl;
