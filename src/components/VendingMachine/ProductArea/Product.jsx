import { useContext } from "react";
import styled from "styled-components";
import { InputSum } from "../../../ContextProvider";

const ProductWrapper = styled.div`
  width: 25%;
`;

const ProductImageWrapper = styled.div`
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    opacity: ${({ stock }) => (stock ? "100%" : "20%")};
  }
`;

const ProductStand = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  box-shadow: 0px -10px 50px -3px ${({ theme }) => theme.colors.lightNavy};
`;

const PriceTag = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ inputSum, price }) => (inputSum >= price ? "100%" : "30%")};
`;

const Product = ({ productInfo, stock, changeStock }) => {
  const { inputSum } = useContext(InputSum);

  const handleClick = () => {
    if (!stock) return;
    changeStock(productInfo.id, stock - 1);
  };

  return (
    <ProductWrapper onClick={handleClick}>
      <ProductImageWrapper stock={stock}>
        <img src={productInfo.imgSrc} alt={productInfo.name} />
      </ProductImageWrapper>
      <ProductStand>
        <PriceTag inputSum={inputSum} price={productInfo.price}>
          {stock ? productInfo.price.toLocaleString() : "Sold out"}
        </PriceTag>
      </ProductStand>
    </ProductWrapper>
  );
};

export default Product;
