import styled from "styled-components";
import { useContext } from "react";
import { ProductsInfo } from "contextProviders/ProductsInfoProvider";
import ProductStockManager from "components/StockManager/ProductStockManager";

const StockManager = () => {
  const { productsInfo, updateProductInfo } = useContext(ProductsInfo);

  return (
    <StockManagerWrapper>
      {productsInfo?.map((productInfo) => (
        <ProductStockManager
          key={productInfo.id}
          productInfo={productInfo}
          updateProductInfo={updateProductInfo}
        />
      ))}
    </StockManagerWrapper>
  );
};

const StockManagerWrapper = styled.div`
  width: 400px;
  height: 900px;
  margin: 100px 0;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default StockManager;
