import React, { useState, createContext } from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import prdData from 'data/products';
import { Container } from 'pages/VendingMachine.style';

export const VendingMachineContext = createContext([]);

function VendingMachine() {
  const [productsData, setProductsData] = useState(prdData);

  return (
    <VendingMachineContext.Provider value={productsData}>
      <Container>
        <ProductsArea />
        <OrderArea />
      </Container>
    </VendingMachineContext.Provider>
  );
}

export default VendingMachine;
