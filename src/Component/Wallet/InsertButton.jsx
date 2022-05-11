import React, {useContext} from 'react';
import styled from 'styled-components';

import {UserAccount} from '../../Store';

const divideCurrentMoney = (moneyList, money) => {
  moneyList.forEach(v => {
    v.count = parseInt(money / v.unit);
    money = money % v.unit;
  });
  return moneyList;
};

const handleMoneyButton = (
  unit,
  currentMoney,
  dispatchCurrentMoney,
  dispatchInsertedMoney,
) => {
  if (currentMoney < unit) {
    return;
  }

  dispatchCurrentMoney({type: 'decrease', income: unit});
  dispatchInsertedMoney({type: 'increase', income: unit});
};

export const InsertButton = ({insertBtnData}) => {
  const {currentMoney, dispatchCurrentMoney, dispatchInsertedMoney} =
    useContext(UserAccount);
  const insertBtnList = divideCurrentMoney(insertBtnData, currentMoney);

  return insertBtnList.map(({unit, id, count}) => (
    <InsertBtnWrapper>
      <MoneyBtn
        key={id}
        onClick={() =>
          handleMoneyButton(
            unit,
            currentMoney,
            dispatchCurrentMoney,
            dispatchInsertedMoney,
          )
        }
      >
        {unit + '원'}
      </MoneyBtn>
      <MoneyBtn>{count + '개'}</MoneyBtn>
    </InsertBtnWrapper>
  ));
};

const MoneyBtn = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  margin-top: 20px;
  margin-right: 10px;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const InsertBtnWrapper = styled.div`
  display: flex;

  :last-child {
    margin-right: none;
  }
`;
