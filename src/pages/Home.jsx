import ControlPanel from 'components/ControlPanel';
import Product from 'components/Product';
import PRODUCTS from 'mock/products';
import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Wrap>
      <Products />
      <ControlPanel />
    </Wrap>
  );
}

export default Home;

function Products() {
  return (
    <ProductWrap>
      {PRODUCTS.map(({ name, price }) => (
        <Product name={name} price={price} />
      ))}
    </ProductWrap>
  );
}

const Wrap = styled.div({
  display: 'flex',
});

const ProductWrap = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 100px)',
  gap: '20px',
  marginTop: '20px',
});
