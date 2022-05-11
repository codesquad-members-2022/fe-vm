import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProgressContext, TotalMoneyContext } from '../App';

const DrinkMenu = ({ drinkData }) => {
  const { selectedDrinkMessage } = useContext(ProgressContext);

  const { totalMoney, setTotalMoney } = useContext(TotalMoneyContext);

  const selectDrink = (idx) => {
    if (totalMoney < drinkData[idx].price) return;
    selectedDrinkMessage(drinkData[idx].name);
    setTotalMoney(totalMoney - drinkData[idx].price);
  };

  return (
    <>
      {drinkData.map(({ id, name, quantity, price }, idx) =>
        quantity ? (
          <DrinkMenuItem
            key={id}
            price={price}
            totalMoney={totalMoney}
            soldOut={false}
          >
            <DrinkNameBtn onClick={() => selectDrink(idx)}>{name}</DrinkNameBtn>
            <DrinkPrice>{price}</DrinkPrice>
          </DrinkMenuItem>
        ) : (
          <DrinkMenuItem
            key={id}
            price={Number.POSITIVE_INFINITY}
            totalMoney={totalMoney}
            soldOut={true}
          >
            <DrinkNameBtn>{name} 품절</DrinkNameBtn>
            <DrinkPrice>X</DrinkPrice>
          </DrinkMenuItem>
        )
      )}
    </>
  );
};

const DrinkMenuItem = styled.li`
  width: 25%;
  border: ${({ price, totalMoney }) =>
    price > totalMoney ? '2px solid black' : '2px solid blue'};

  background-color: ${({ soldOut }) => (soldOut ? 'red' : '')};
  margin: 15px;
`;

const DrinkNameBtn = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: bold;
`;

const DrinkPrice = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export default DrinkMenu;
