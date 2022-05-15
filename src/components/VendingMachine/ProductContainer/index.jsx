import { useContext } from 'react';
import { MoneyContext } from 'context/MoneyContext';
import styled from 'styled-components';
import PRODUCTS_LIST from 'mock/Products';
import Product from './Product';

export default function ProductContainer() {
  const { insertMoneyData } = useContext(MoneyContext);

  const productComponents = PRODUCTS_LIST.map(product => (
    <Product key={product.id} info={product} totalMoney={insertMoneyData}></Product>
  ));

  return (
    <Container>
      <GridWrapper>{productComponents}</GridWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 12px 0 0 12px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 20px;
  border-radius: 12px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;
