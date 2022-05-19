import React, { useState } from 'react';
import { Container } from 'components/productsArea/ProductsArea.style';
import productsData from 'data/products';
import Product from 'components/productsArea/Product';

export default function ProductsArea() {
  const [selectalbeStatus, setSelectableStatus] = useState(true);

  const toggleSelectableStatus = isSelectalbe => setSelectableStatus(isSelectalbe);

  return (
    <Container selectalbeStatus={selectalbeStatus}>
      {productsData.map(productInfo => (
        <Product key={productInfo.id} productInfo={productInfo} toggleSelectableStatus={toggleSelectableStatus} />
      ))}
    </Container>
  );
}
