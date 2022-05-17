import React from 'react';
import { MoneyItem, Unit, Number } from 'components/Money.Styled';

const Money = ({ money, index, handleClickMoney }) => {
  return (
    <MoneyItem>
      <Unit onClick={() => handleClickMoney(money.unit, index)}>
        {money.unit.toLocaleString()}원
      </Unit>
      <Number>{money.number}개</Number>
    </MoneyItem>
  );
};

export default React.memo(Money);
