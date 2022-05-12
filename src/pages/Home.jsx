import ControlPanel from 'components/ControlPanel';
import Product from 'components/Product';
import PRODUCTS from 'mocks/products';
import styled from 'styled-components';
import React from 'react';

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
      {PRODUCTS.map(({ id, name, price }) => (
        <Product key={id} name={name} price={price} />
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
