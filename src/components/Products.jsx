import React, { useState } from 'react';
import styled from 'styled-components';
import Product from 'components/Product';
import PRODUCTS from 'mocks/products';

function Products() {
  const [products, setProducts] = useState(PRODUCTS);
  return (
    <ProductWrap>
      {products.map(({ id, name, price, stock }) => (
        <Product key={id} products={products} setProducts={setProducts} name={name} price={price} stock={stock} />
      ))}
    </ProductWrap>
  );
}

export default Products;

const ProductWrap = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 100px)',
  gap: '20px',
  marginTop: '20px',
});
