import React from 'react';
import { MoneyItem, Unit, Number } from 'components/Money.Styled';

const Money = ({ unit, number, index, handleClickMoney }) => {
  console.log(index);

  return (
    <MoneyItem>
      <Unit onClick={handleClickMoney.bind(null, unit, index)}>
        {unit.toLocaleString()}원
      </Unit>
      <Number>{number}개</Number>
    </MoneyItem>
  );
};

export default React.memo(Money);
