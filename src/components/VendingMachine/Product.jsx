import { useContext } from "react";
import styled from "styled-components";
import { InputBalanceContext } from "../../ContextProvider";

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
  opacity: ${({ inputBalance, price }) => (inputBalance >= price ? "100%" : "20%")};
`;

const Product = ({ productInfo, stock, changeStock }) => {
  const { inputBalance } = useContext(InputBalanceContext);

  const handleClick = () => {
    if (!stock) return;
    changeStock(productInfo.id, stock - 1);
  };

  return (
    <ProductWrapper stock={stock} onClick={handleClick}>
      <ProductImageWrapper>
        <img src={productInfo.imgSrc} alt={productInfo.name} />
      </ProductImageWrapper>
      <PriceTag inputBalance={inputBalance} price={productInfo.price}>
        {productInfo.price.toLocaleString()}
      </PriceTag>
    </ProductWrapper>
  );
};

export default Product;
