import React, { useContext } from 'react';
import { VendingMachineContext } from 'pages/VendingMachine';
import { Container } from 'components/productsArea/ProductsArea.style';
import Product from 'components/productsArea/Product';

export default function ProductsArea() {
  const productsData = useContext(VendingMachineContext);

  return (
    <Container>
      {productsData.map(({ id, detail, price }) => (
        <Product key={id} detail={detail} price={price} />
      ))}
    </Container>
  );
}
