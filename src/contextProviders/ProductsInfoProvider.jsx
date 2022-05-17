import { createContext, useEffect, useState } from "react";
import { request } from "../fetcher";

export const ProductsInfo = createContext();

export const ProductsInfoProvider = ({ children }) => {
  const [productsInfo, setProductsInfo] = useState();

  useEffect(() => {
    (async () => {
      const initialProductsInfo = await request.getData("productsInfo");
      setProductsInfo(initialProductsInfo);
    })();
  }, []);

  const updateProductInfo = (productId, newInfo) => {
    const updatedProductsInfo = productsInfo.map((productInfo) => {
      if (productInfo.id === productId) {
        return newInfo;
      }
      return productInfo;
    });
    setProductsInfo(updatedProductsInfo);
    request.patchData("productsInfo", productId, newInfo);
  };

  return (
    <ProductsInfo.Provider
      value={{
        productsInfo,
        updateProductInfo,
      }}
    >
      {children}
    </ProductsInfo.Provider>
  );
};
