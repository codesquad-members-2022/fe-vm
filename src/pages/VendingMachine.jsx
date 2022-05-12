import React, { useState, createContext } from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import initialProductsData from 'data/products';
import { Container } from 'pages/VendingMachine.style';

const ProductsContext = createContext([]);
const PaymentContext = createContext([]);

export default function VendingMachine() {
  const useProductsState = useState(initialProductsData);
  const usePaymentState = useState(0);

  return (
    <ProductsContext.Provider value={useProductsState}>
      <PaymentContext.Provider value={usePaymentState}>
        <Container>
          <ProductsArea />
          <OrderArea />
        </Container>
      </PaymentContext.Provider>
    </ProductsContext.Provider>
  );
}

export { ProductsContext, PaymentContext };
