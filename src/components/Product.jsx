import React, { useContext } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';

function Product({ name, price }) {
  const { curMoney } = useContext(MoneyContext);
  const canPurchase = curMoney >= price;
  return (
    <div>
      <Name canPurchase={canPurchase}>{name}</Name>
      <Price>{price}</Price>
    </div>
  );
}

export default Product;

const Name = styled.button`
  border-color: ${({ canPurchase }) => (canPurchase ? 'red' : 'black')};
  width: 100px;
  height: 50px;
  padding: 0;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

const Price = styled.div`
  text-align: center;
`;
