import React from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import { Container } from 'pages/VendingMachine.style';
import { FinalPayProvider } from 'contexts/FinalPayProvider';

export default function VendingMachine() {
  return (
    <FinalPayProvider>
      <Container>
        <ProductsArea />
        <OrderArea />
      </Container>
    </FinalPayProvider>
  );
}
