import React, { useContext, useEffect, useState } from 'react';

import { ProgressContext, TotalMoneyContext } from '../App';
import DrinkItem from './DrinkItem';
import { fetchData } from '../utility/util';

const DrinkMenu = () => {
  const [drinkData, setDrinkData] = useState([]);
  const { selectedDrinkMessage } = useContext(ProgressContext);
  const [totalMoney, setTotalMoney] = useContext(TotalMoneyContext);

  useEffect(() => {
    const drinkUrl = `${process.env.PUBLIC_URL}/data/drink.json`;

    getDrinkData(drinkUrl, setDrinkData);
  }, []);

  const getDrinkData = async (url, setData) => {
    const response = await fetchData(url);

    setData(response.drink);
  };

  const selectDrink = (id) => () => {
    const selectedItem = drinkData.find((data) => data.id === id);

    if (totalMoney < selectedItem.price || !selectedItem.quantity) return;

    selectedDrinkMessage(selectedItem.name);
    setTotalMoney(totalMoney - selectedItem.price);
    minusQuantity(selectedItem);
  };

  const minusQuantity = ({ id, quantity }) => {
    setDrinkData(
      drinkData.map((data) =>
        data.id !== id ? data : { ...data, quantity: (quantity -= 1) }
      )
    );
  };

  return (
    <>
      {drinkData.map(({ id, price, quantity, name }) => {
        const drinkInfo = {
          id: id,
          price: price,
          quantity: quantity,
          name: name,
          totalMoney: totalMoney,
          soldOut: quantity ? false : true,
          onClick: selectDrink,
        };

        return <DrinkItem key={id} drinkInfo={drinkInfo} />;
      })}
    </>
  );
};

export default DrinkMenu;
