/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import productsData from 'data/products';

export const ProductsContext = createContext([]);
export const ProductsSetContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProductsState] = useState(productsData);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsSetContext.Provider value={setProductsState}>{children}</ProductsSetContext.Provider>;
    </ProductsContext.Provider>
  );
}
