import { useEffect, useState } from "react";
import styled from "styled-components";
import ProductsDisplay from "./ProductsDisplay";
import ProductOutlet from "./ProductOutlet";
import { fetchData } from "../../fetcher";

const VendingMachineWrapper = styled.div`
  display: flex;
  height: 900px;
  margin: 100px auto;
`;
const ProductsArea = styled.div`
  width: 750px;
  height: 100%;
  box-sizing: border-box;
  border: 5px solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const UtilArea = styled.div`
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  border: 4px solid ${({ theme }) => theme.colors.black}; ;
`;

const VendingMachine = () => {
  const [productsInfo, setProductsInfo] = useState();
  const [stockData, setStockData] = useState();

  useEffect(() => {
    (async () => {
      const initialProductsInfo = await fetchData("productsInfo");
      const initialStockData = await fetchData("stock");
      setProductsInfo(initialProductsInfo);
      setStockData(initialStockData);
    })();
  }, []);

  const changeStock = (productID, stock) => {
    const newStockData = { ...stockData };
    newStockData[productID] = stock;
    setStockData(newStockData);
  };

  return (
    <VendingMachineWrapper>
      <ProductsArea>
        {productsInfo && stockData && (
          <ProductsDisplay productsInfo={productsInfo} stockData={stockData} changeStock={changeStock} />
        )}
        <ProductOutlet />
      </ProductsArea>
      <UtilArea />
    </VendingMachineWrapper>
  );
};

export default VendingMachine;
