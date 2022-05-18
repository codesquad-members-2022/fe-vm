import React from 'react';
import { Container } from 'components/productsArea/ProductsArea.style';
import productsData from 'data/products';
import Product from 'components/productsArea/Product';

export default function ProductsArea() {
  return (
    <Container>
      {productsData.map(productInfo => (
        <Product key={productInfo.id} productInfo={productInfo} />
      ))}
    </Container>
  );
}
