import styled, { css } from "styled-components";

const productButtonStyle = css`
  width: 95%;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.small};
  border: ${({ theme: { borders } }) => borders.normal};

  &:hover:not([disabled]) {
    ${({ theme: { colors, fontWeights } }) => `
    background-color: ${colors.green};
    color: ${colors.white};
    font-weight: ${fontWeights.bold};
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

  button[disabled] {
    background-color: ${({ theme: { colors }, isInStock }) =>
      isInStock && `${colors.white}`};
  }

  button:not([disabled]) {
    border: ${({ theme: { colors }, isAvailablePurchase }) =>
      isAvailablePurchase && `3px solid ${colors.green}`};
  }

  p {
    color: ${({ theme: { colors }, isInStock }) =>
      !isInStock && `${colors.red}`};
  }
`;

export { productButtonStyle, ProductLi };
