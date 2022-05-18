import { useState, useContext } from "react";
import styled from "styled-components";
import { ProductsInfo } from "contextProviders/ProductsInfoProvider";
import { Balance } from "contextProviders/BalanceProvider";
import { Records } from "contextProviders/RecordsProvider";
import ProductsDisplay from "./ProductsDisplay";
import Outlet from "./Outlet";
import { activityType } from "convention";

const ProductArea = () => {
  const { updateProductInfo } = useContext(ProductsInfo);
  const { inputSum, setInputSum } = useContext(Balance);
  const { updateRecord } = useContext(Records);
  const [purchaseTarget, setPurchaseTarget] = useState(null);

  const handlePurchaseBtnClick = (productInfo) => {
    if (purchaseTarget) return;
    if (!productInfo.stock) {
      updateRecord(activityType.OUT_OF_STOCK, productInfo.name);
    } else if (inputSum < productInfo.price) {
      updateRecord(activityType.LACK_OF_MONEY);
    } else {
      purchaseProduct(productInfo);
    }
  };

  const purchaseProduct = (productInfo) => {
    setPurchaseTarget(productInfo);
    setTimeout(() => {
      const newProductInfo = { ...productInfo };
      newProductInfo.stock--;
      updateProductInfo(productInfo.id, newProductInfo);
      setInputSum(inputSum - productInfo.price);
      updateRecord(activityType.PURCHASE, productInfo.name);
      setPurchaseTarget(null);
    }, 2000);
  };

  return (
    <ProductAreaWrapper>
      <ProductsDisplay handlePurchaseBtnClick={handlePurchaseBtnClick} />
      <Outlet purchaseTarget={purchaseTarget} />
    </ProductAreaWrapper>
  );
};

const ProductAreaWrapper = styled.div`
  width: 750px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ProductArea;
