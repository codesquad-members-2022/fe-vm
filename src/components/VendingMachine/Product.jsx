import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 150px;
  opacity: ${({ stock }) => (stock ? "100%" : "20%")};
`;

const ProductImageWrapper = styled.div`
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const PriceTag = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

const Product = ({ productInfo, stock, changeStock }) => {
  return (
    <ProductWrapper stock={stock}>
      <ProductImageWrapper>
        <img src={productInfo.imgSrc} alt={productInfo.name} />
      </ProductImageWrapper>
      <PriceTag>{productInfo.price.toLocaleString()}</PriceTag>
    </ProductWrapper>
  );
};

export default Product;
