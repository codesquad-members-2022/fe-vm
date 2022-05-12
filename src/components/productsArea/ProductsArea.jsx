import React, { useContext } from 'react';
import { Container } from 'components/productsArea/ProductsArea.style';
import { ProductsContext } from 'pages/VendingMachine';
import Product from 'components/productsArea/Product';

export default function ProductsArea() {
  const [productsState] = useContext(ProductsContext);

  return (
    <Container>
      {productsState.map(({ id, detail, price, quantity }) => (
        <Product key={id} detail={detail} price={price} quantity={quantity} />
      ))}
    </Container>
  );
}
