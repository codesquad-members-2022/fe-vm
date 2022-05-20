import React, { useState } from 'react';
import ProductsArea from 'components/productsArea/ProductsArea';
import OrderArea from 'components/orderArea/OrderArea';
import { Container } from 'pages/VendingMachine.style';

export default function VendingMachine() {
  const [selectalbeStatus, setSelectableStatus] = useState(true);

  const toggleSelectableStatus = isSelectalbe => setSelectableStatus(isSelectalbe);

  return (
    <Container selectalbeStatus={selectalbeStatus}>
      <ProductsArea toggleSelectableStatus={toggleSelectableStatus} />
      <OrderArea />
    </Container>
  );
}
