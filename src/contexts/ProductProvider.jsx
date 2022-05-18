import React, { createContext } from "react";

const ProductProvider = ({ children }) => {
  return (
    <ProductStateContext.Provider value={"s"}>
      <ProductDispatchContext.Provider value={"s"}>{children}</ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();
export default ProductProvider;
