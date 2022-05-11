import { useEffect, useState } from "react";
import { fetchData } from "../../../fetcher";
import styled from "styled-components";
import ProductsDisplay from "./ProductsDisplay";

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

const ProductAreaWrapper = styled.div`
  width: 750px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ProductArea;
