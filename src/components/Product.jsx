import React from 'react';
import styled from 'styled-components';

function Product({ name, price }) {
  return (
    <Wrap>
      <Name>{name}</Name>
      <Price>{price}</Price>
    </Wrap>
  );
}

export default Product;

const Wrap = styled.div({});

const Name = styled.div({
  border: '1px solid black',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
});

const Price = styled.div({
  textAlign: 'center',
});
