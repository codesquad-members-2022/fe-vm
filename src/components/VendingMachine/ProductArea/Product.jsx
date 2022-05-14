import { useContext } from "react";
import { Balance } from "../../../contextProviders/BalanceProvider";
import { Records } from "../../../contextProviders/RecordsProvider";
import { ProductsInfo } from "../../../contextProviders/ProductsInfoProvider";
import { activityType } from "../../../convention";
import styled, { css } from "styled-components";
import Button from "../../common/Button";

const Product = ({ productInfo, productIdx }) => {
  const { inputSum, setInputSum } = useContext(Balance);
  const { updateRecord } = useContext(Records);
  const { updateProductInfo } = useContext(ProductsInfo);

  const handleClick = () => {
    if (!productInfo.stock) {
      updateRecord(activityType.OUT_OF_STOCK, productInfo.name);
    } else if (inputSum < productInfo.price) {
      updateRecord(activityType.LACK_OF_MONEY);
    } else {
      purchaseProduct();
      updateRecord(activityType.PURCHASE, productInfo.name);
    }
  };

  const purchaseProduct = () => {
    const newProductInfo = { ...productInfo };
    newProductInfo.stock--;
    updateProductInfo(productInfo.id, productIdx, newProductInfo);
    setInputSum(inputSum - productInfo.price);
  };

  const decidePurchaseBtnStyles = () => {
    if (!productInfo.stock) {
      return outOfStockButtonStyle;
    }
    if (productInfo.price > inputSum) {
      return lackOfMoneyButtonStyle;
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
          onClick={handleClick}
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

const lackOfMoneyButtonStyle = css`
  ${normalButtonStyle};
  opacity: 0.3;
`;

export default Product;
