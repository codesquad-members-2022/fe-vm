import React, { useContext } from 'react';
import styled from 'styled-components';
import VendingCard from './VendingCard';
import { DUMMY_DATA, _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

const VendingCards = () => {
  const { money, dispatchMoney, dispatchLog } = useContext(AmountContext);
  const onSaveInfo = (price, name) => {
    if (money.TOTAL_AMOUNT < price) return alert('금액이 부족합니다');
    console.log(money.INSERTED);
    dispatchLog({ type: 'BUY', item: { price, name } });
  };

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
