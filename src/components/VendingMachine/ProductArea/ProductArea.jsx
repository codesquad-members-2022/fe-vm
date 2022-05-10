import styled from "styled-components";
import { useEffect, useState } from "react";
import { fetchData } from "../../../fetcher";
import ProductsDisplay from "./ProductsDisplay";

const ProductAreaWrapper = styled.div`
  width: 750px;
  height: 100%;
  box-sizing: border-box;
  border: 5px solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;

const ProductArea = () => {
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
    <ProductAreaWrapper>
      {productsInfo && stockData && (
        <ProductsDisplay productsInfo={productsInfo} stockData={stockData} changeStock={changeStock} />
      )}
    </ProductAreaWrapper>
  );
};

export default ProductArea;
