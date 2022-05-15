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

  const selectDrink = (id) => {
    const selectedItem = drinkData.find((data) => data.id === id);
    if (totalMoney < selectedItem.price) return;

    selectedDrinkMessage(selectedItem.name);
    setTotalMoney(totalMoney - selectedItem.price);
    minusQuantity(selectedItem);
  };

  const minusQuantity = ({ id, name, quantity, price }) => {
    setDrinkData(
      drinkData.map((data) =>
        data.id !== id
          ? data
          : {
              id: id,
              name: name,
              quantity: (quantity -= 1),
              price: price,
            }
      )
    );
  };

  return (
    <>
      {drinkData.map(({ id, price, quantity, name }) =>
        quantity ? (
          <DrinkItem
            key={id}
            id={id}
            price={price}
            quantity={quantity}
            name={name}
            totalMoney={totalMoney}
            soldOut={false}
            onClick={selectDrink}
          />
        ) : (
          <DrinkItem
            key={id}
            id={id}
            price={Number.POSITIVE_INFINITY}
            quantity={quantity}
            name={name}
            totalMoney={totalMoney}
            soldOut={true}
            onClick={() => {}}
          />
        )
      )}
    </>
  );
};

export default DrinkMenu;
