import React, { useContext } from 'react';
import { Container, Product } from 'components/orderArea/ProductHole.style';
import { SelectedProductContext } from 'contexts/SelectedProductProvider';

export default function ProductHole() {
  const selectedProduct = useContext(SelectedProductContext);

  return (
    <Container>
      <Product visible={!!selectedProduct.detail}>{selectedProduct.detail}</Product>
    </Container>
  );
}
