import styled from 'styled-components';
import Product from './Product';

export default function ProductList({ products }) {
  return (
    <ProductBox>
      <Product products={products} />
    </ProductBox>
  );
}

const ProductBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 20px;
`;
