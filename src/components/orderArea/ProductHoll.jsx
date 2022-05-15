import React, { useContext } from 'react';
import { Container, Product } from 'components/orderArea/ProductHoll.style';
// import { FinalPayContext } from 'pages/VendingMachine';
import { SelectedProductContext } from 'App';

export default function ProductHoll() {
  const { detail } = useContext(SelectedProductContext)[0];

  return (
    <Container>
      <Product visible={!!detail}>{detail}</Product>
    </Container>
  );
}
