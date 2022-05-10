import Product from 'components/Product';
import PRODUCTS from 'mock/products';
import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Products>
      {PRODUCTS.map(({ name, price }) => (
        <Product name={name} price={price} />
      ))}
    </Products>
  );
}

export default Home;

const Products = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 100px)',
  gap: '20px',
  marginTop: '20px',
});
