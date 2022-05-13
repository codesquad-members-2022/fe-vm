import styled from "styled-components";
import { useContext, useState } from "react";
import { ProductsInfo } from "../contextProviders/ProductsInfoProvider";
import ProductStockManager from "../components/StockManager/ProductStockManager";
import SaveButton from "../components/StockManager/SaveButton";

const StockManager = () => {
  const { productsInfo } = useContext(ProductsInfo);
  const [tempProductsInfo, setTempProductsInfo] = useState(productsInfo);

  return (
    <StockManagerWrapper>
      {tempProductsInfo?.map((tempProductInfo) => (
        <ProductStockManager
          key={tempProductInfo.id}
          tempProductInfo={tempProductInfo}
          setTempProductsInfo={setTempProductsInfo}
        />
      ))}
      <SaveButton tempProductsInfo={tempProductsInfo} />
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
