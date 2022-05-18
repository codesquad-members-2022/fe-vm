import React from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import { Container } from 'pages/VendingMachine.style';
import { ProductsProvider } from 'Context/ProductsProvider';
import { FinalPayProvider } from 'Context/FinalPayProvider';

export default function VendingMachine() {
  return (
    <ProductsProvider>
      <FinalPayProvider>
        <Container>
          <ProductsArea />
          <OrderArea />
        </Container>
      </FinalPayProvider>
    </ProductsProvider>
  );
}
