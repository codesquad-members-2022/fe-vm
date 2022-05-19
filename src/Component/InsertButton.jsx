import React, {useContext} from 'react';
import styled from 'styled-components';

import {useTimer} from '../Store';

const divideCurrentMoney = (moneyList, money) => {
  moneyList.forEach(v => {
    v.count = parseInt(money / v.unit);
    money = money % v.unit;
  });
  return moneyList;
};

const handleMoneyButton =
  (unit, currentMoney, insertMoney, count, setTimer, clearTimer, refundMoney) =>
  () => {
    if (currentMoney < unit || count === 0) {
      return;
    }
    clearTimer();
    insertMoney(unit);
    setTimer(refundMoney, 'insert');
  };

export const InsertButton = ({
  insertBtnData,
  handleMoneyBtn,
  walletState: {currentMoney},
  refundMoney,
}) => {
  const insertBtnList = divideCurrentMoney(insertBtnData, currentMoney);
  const {setTimer, clearTimer} = useTimer();

  return insertBtnList.map(({unit, id, count}) => (
    <InsertBtnWrapper>
      <MoneyBtn
        key={id}
        //Todo: 인자값 줄이기 리팩토링
        onClick={handleMoneyButton(
          unit,
          currentMoney,
          handleMoneyBtn,
          count,
          setTimer,
          clearTimer,
          refundMoney,
        )}
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
