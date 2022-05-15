import { createContext, useState } from "react";
import { products } from "../datas/products";

export const ProductContext = createContext(products);

function ProductProvider({ children }) {
  const [beverage, setBeverage] = useState(products);

  const value = { beverage, setBeverage };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export default ProductProvider;
