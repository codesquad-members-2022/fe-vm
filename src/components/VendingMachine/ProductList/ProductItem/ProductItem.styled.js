import styled from "styled-components";
import theme from "styles/theme";

const productButtonStyle = {
  size: { width: "95%", height: "3rem" },
  fontStyle: theme.fontStyles.buttons.small,
  border: `1px solid ${theme.colors.black}`,
  margin: "0 auto",
  hover: {
    backgroundColor: theme.colors.darkblue,
    color: theme.colors.white,
    fontWeight: "600",
  },
};

const ProductLi = styled.li`
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-price {
    text-align: center;
    font-weight: 600;
  }
`;

export { productButtonStyle, ProductLi };
