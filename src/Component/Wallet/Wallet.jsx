import React, {useContext, useState} from 'react';
import styled from 'styled-components';

import {MONEY_BUTTON_DATA} from '../../mocks/MoneyButtonData';
import {UserAccount} from '../../Store';

const calMoneyData = (moneyList, money) => {
  moneyList.forEach(v => {
    v.count = parseInt(money / v.unit);
    money = money % v.unit;
  });
  return moneyList;
};

const createInsertButton = moneyList => {
  const {currentMoney, dispatchCurrentMoney} = useContext(UserAccount);
  const [insertButton, setInsertButton] = useState(
    calMoneyData(moneyList, currentMoney),
  );

  const handleMoneyButton = (unit, id, currentMoney) => {
    if (currentMoney < unit) {
      return;
    }
    insertButton.forEach(v => {
      if (v.id === id) {
        v.count++;
      }
    });

    dispatchCurrentMoney({type: 'decrease', income: unit});
    setInsertButton([...insertButton]);
  };

  return insertButton.map(({unit, id, count}) => (
    <TestWrapper>
      <MoneyBtn
        key={id}
        onClick={() => handleMoneyButton(unit, id, currentMoney)}
      >
        {unit + '원'}
      </MoneyBtn>
      <MoneyBtn>{count + '개'}</MoneyBtn>
    </TestWrapper>
  ));
};

export const Wallet = () => {
  const {currentMoney} = useContext(UserAccount);

  return (
    <WalletWrapper>
      {createInsertButton(MONEY_BUTTON_DATA)}
      <TotalMoney>{currentMoney}</TotalMoney>
    </WalletWrapper>
  );
};

const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  height: 1000px;
  border: 3px solid grey;
`;

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

const TestWrapper = styled.div`
  display: flex;

  :last-child {
    margin-right: none;
  }
`;

const TotalMoney = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 20px;
  margin-right: 10px;
`;
