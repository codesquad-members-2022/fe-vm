import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import VendingCard from './VendingCard';
import { DUMMY_DATA, _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

const VendingCards = () => {
  const { money, dispatchMoney, dispatchLog } = useContext(AmountContext);
  const [clickedProduct, setClickedProduce] = useState({
    price: null,
    name: null,
  });

  const onSaveInfo = (price, name) => {
    if (money.TOTAL_AMOUNT < price) return alert('금액이 부족합니다');
    setClickedProduce({ price, name });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (!clickedProduct.price) return;
      dispatchMoney({ type: 'BUY', payload: clickedProduct.price });
      dispatchLog({ type: 'BUY', payload: clickedProduct });
    }, 2000);

    return () => {
      clearTimeout(identifier);
    };
  }, [clickedProduct]);

  return (
    <VendingCardLists>
      {DUMMY_DATA.map(({ id, name, price }) => (
        <VendingCard
          id={id}
          key={id}
          name={name}
          price={price}
          isAffordable={money.TOTAL_AMOUNT >= price}
          onSave={onSaveInfo}
        />
      ))}
    </VendingCardLists>
  );
};

const VendingCardLists = styled.ul`
  ${({ theme }) => theme.mixin.flexMixin('row', _, 'space-between', 'wrap')};
  width: 55%;
  height: 90%;
`;

export default VendingCards;
