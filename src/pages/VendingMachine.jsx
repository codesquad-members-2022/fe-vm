import React, { useState, createContext } from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import initialProductsData from 'data/products';
import { Container } from 'pages/VendingMachine.style';

const ProductsContext = createContext([]);

export default function VendingMachine() {
  const useProductsState = useState(initialProductsData);

  return (
    <ProductsContext.Provider value={useProductsState}>
      <Container>
        <ProductsArea />
        <OrderArea />
      </Container>
    </ProductsContext.Provider>
  );
}

export { ProductsContext };
