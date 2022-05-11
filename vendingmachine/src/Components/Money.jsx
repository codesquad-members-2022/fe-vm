import React from 'react';
import styled from 'styled-components';
import {
  FlexCenter,
  MoneyUnitNumber,
  ButtonCommon,
} from '../styled-components/util';

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

const MoneyItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: ${({ theme }) => theme.margin.large};
`;

const Unit = styled.button`
  ${ButtonCommon}
  ${MoneyUnitNumber}

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const Number = styled(FlexCenter)`
  cursor: default;
  ${MoneyUnitNumber}
`;

export default React.memo(Money);
