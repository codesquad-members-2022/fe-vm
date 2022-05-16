import React, {useContext} from 'react';
import styled from 'styled-components';

import {UserAccount} from '../Store';

const divideCurrentMoney = (moneyList, money) => {
  moneyList.forEach(v => {
    v.count = parseInt(money / v.unit);
    money = money % v.unit;
  });
  return moneyList;
};

const handleMoneyButton = (unit, currentMoney, insertMoney) => {
  if (currentMoney < unit) {
    return;
  }
  insertMoney(unit);
};

export const InsertButton = ({insertBtnData}) => {
  const {
    account: {currentMoney},
    insertMoney,
  } = useContext(UserAccount);
  const insertBtnList = divideCurrentMoney(insertBtnData, currentMoney);

  return insertBtnList.map(({unit, id, count}) => (
    <InsertBtnWrapper>
      <MoneyBtn
        key={id}
        onClick={() => handleMoneyButton(unit, currentMoney, insertMoney)}
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
