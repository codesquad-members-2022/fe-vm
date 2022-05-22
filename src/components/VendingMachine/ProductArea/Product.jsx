import { useContext } from "react";
import { Balance } from "contextProviders/BalanceProvider";
import styled, { css } from "styled-components";
import Button from "components/common/Button";

const Product = ({ productInfo, handlePurchaseBtnClick }) => {
  const { inputSum } = useContext(Balance);

  const decidePurchaseBtnStyles = () => {
    if (!productInfo.stock) {
      return outOfStockButtonStyle;
    }
    if (productInfo.price > inputSum) {
      return lackOfInputsumButtonStyle;
    }
    return normalButtonStyle;
  };

  const decidePurchaseBtnContent = () => {
    return productInfo.stock ? productInfo.price.toLocaleString() : "Sold out";
  };

  return (
    <ProductWrapper>
      <ProductImageWrapper stock={productInfo.stock}>
        <img src={productInfo.imgSrc} alt={productInfo.name} />
      </ProductImageWrapper>
      <ProductStand>
        <Button
          styles={decidePurchaseBtnStyles()}
          content={decidePurchaseBtnContent()}
          onClick={() => handlePurchaseBtnClick(productInfo)}
        />
      </ProductStand>
    </ProductWrapper>
  );
};

const ProductWrapper = styled.div`
  width: 25%;
`;

const ProductImageWrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    width: 80%;
    height: 80%;
    opacity: ${({ stock }) => (stock ? "100%" : "20%")};
    object-fit: cover;
  }
`;

const ProductStand = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey1};
  box-shadow: 0px -10px 25px -5px ${({ theme }) => theme.colors.grey1};
`;

const normalButtonStyle = css`
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 30px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.activatedGreen};
  background: ${({ theme }) => theme.colors.grey4};
`;

const outOfStockButtonStyle = css`
  ${normalButtonStyle};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.red};
`;

const lackOfInputsumButtonStyle = css`
  ${normalButtonStyle};
  opacity: 0.3;
`;

export default Product;
