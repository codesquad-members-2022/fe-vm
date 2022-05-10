import styled from 'styled-components';
import productsList from 'mock/Products';
import Product from './Product';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  border: 1px solid black;
  background: ${({ theme }) => theme.colors.green};
`;

export default function ProductContainer() {
  const list = productsList.map(product => <Product key={product.id} info={product}></Product>);

  return <GridContainer>{list}</GridContainer>;
}
