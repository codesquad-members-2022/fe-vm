import styled from "styled-components";
import ProductsDisplay from "./ProductsDisplay";

const ProductArea = () => {
  return (
    <ProductAreaWrapper>
      <ProductsDisplay />
    </ProductAreaWrapper>
  );
};

const ProductAreaWrapper = styled.div`
  width: 750px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ProductArea;
