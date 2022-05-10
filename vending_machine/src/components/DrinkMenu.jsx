import React, { useContext } from 'react';
import styled from 'styled-components';

import { VmInputValueContext } from '../App';

const DrinkMenu = ({ drinkData }) => {
  const { inputValue } = useContext(VmInputValueContext);

  return (
    <>
      {drinkData.map(({ id, name, quantity, price }) => (
        <DrinkMenuItem key={id} price={price} inputValue={inputValue}>
          <DrinkNameBtn>{name}</DrinkNameBtn>
          <DrinkPrice>{price}</DrinkPrice>
        </DrinkMenuItem>
      ))}
    </>
  );
};

const DrinkMenuItem = styled.li`
  width: 25%;
  margin-bottom: 20px;
  border: ${({ price, inputValue }) =>
    price > inputValue ? '2px solid black' : '2px solid red'};
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
