import React, { useState } from 'react';

import productData from 'mocks/productData';

export const ProductsContext = React.createContext();

export const ProductsProvider = props => {
  const initialProductsData = productData;

  const [products, setProducts] = useState(initialProductsData);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
