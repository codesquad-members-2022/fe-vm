import styled from 'styled-components';
import Product from './Product';

export default function ProductList({ products, payTotal, message }) {
  return (
    <ProductBox>
      <Product products={products} payTotal={payTotal} message={message} />
    </ProductBox>
  );
}

const ProductBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px 20px;
`;
