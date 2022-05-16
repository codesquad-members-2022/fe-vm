import React, { useContext } from 'react';
import { Container, Product } from 'components/orderArea/ProductHole.style';
// import { FinalPayContext } from 'pages/VendingMachine';
import { SelectedProductContext } from 'App';

export default function ProductHole() {
  const { detail } = useContext(SelectedProductContext)[0];

  return (
    <Container>
      <Product visible={!!detail}>{detail}</Product>
    </Container>
  );
}
