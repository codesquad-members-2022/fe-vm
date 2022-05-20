import React, { useState } from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import { Container } from 'pages/VendingMachine.style';
import { FinalPayProvider } from 'contexts/FinalPayProvider';

export default function VendingMachine() {
  const [selectalbeStatus, setSelectableStatus] = useState(true);

  const toggleSelectableStatus = isSelectalbe => setSelectableStatus(isSelectalbe);

  return (
    <FinalPayProvider>
      <Container selectalbeStatus={selectalbeStatus}>
        <ProductsArea toggleSelectableStatus={toggleSelectableStatus} />
        <OrderArea />
      </Container>
    </FinalPayProvider>
  );
}
