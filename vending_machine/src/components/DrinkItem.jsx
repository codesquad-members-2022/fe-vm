import React from 'react';
import styled from 'styled-components';

import { color } from '../style/variables';
import { changeKoreanLocalMoney } from '../utility/util';

const DrinkItem = ({
  drinkInfo: { id, price, name, quantity, totalMoney, soldOut, onClick },
}) => {
  return (
    <DrinkMenuItem price={price} totalMoney={totalMoney} soldOut={soldOut}>
      <DrinkNameBtn onClick={onClick(id)}>{name}</DrinkNameBtn>
      <DrinkInfo>
        {+quantity ? changeKoreanLocalMoney(price) : '품절'}
      </DrinkInfo>
      <DrinkInfo>{quantity}</DrinkInfo>
    </DrinkMenuItem>
  );
};

const DrinkMenuItem = styled.li`
  width: 25%;
  border: ${({ price, totalMoney }) =>
    price > totalMoney
      ? `2px solid ${color.black} `
      : `2px solid ${color.blue}`};
  background-color: ${({ soldOut }) => (soldOut ? color.red : '')};
  margin: 15px;
`;

const DrinkNameBtn = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: bold;
`;

const DrinkInfo = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export default DrinkItem;
