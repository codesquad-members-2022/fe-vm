import ControlPanel from 'components/ControlPanel';
import Product from 'components/Product';
import PRODUCTS from 'mock/products';
import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Wrap>
      <Products>
        {PRODUCTS.map(({ name, price }) => (
          <Product name={name} price={price} />
        ))}
      </Products>
      <ControlPanel />
    </Wrap>
  );
}

export default Home;

const Wrap = styled.div({
  display: 'flex',
});

const Products = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 100px)',
  gap: '20px',
  marginTop: '20px',
});
