import styled, { css } from "styled-components";

const productButtonStyle = css`
  width: 95%;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.small};
  border: ${({ theme: { borders } }) => borders.normal};

  &:hover:not([disabled]) {
    ${({ theme: { colors, fontWeights } }) => `
    background-color: ${colors.darkblue};
    color: ${colors.white};
    font-weight: ${fontWeights.mediumBold};
  `}
  }
`;

const ProductLi = styled.li`
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-price {
    text-align: center;
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.mediumBold};
  }
`;

export { productButtonStyle, ProductLi };
