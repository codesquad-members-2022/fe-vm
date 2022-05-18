import React, {useContext, useEffect} from 'react';
import {useAccount} from '../Hooks/Account';
import styled from 'styled-components';

import {MONEY_BUTTON_DATA} from '../Mocks/MoneyButtonData';
import {UserAccount} from '../Store';
import {InsertButton} from '../Component';

const accountReducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return {
        currentMoney: state.currentMoney - action.incomeMoney,
        insertedMoney: state.insertedMoney + action.incomeMoney,
      };

    case 'refund':
      return {
        currentMoney: state.currentMoney + state.insertedMoney,
        insertedMoney: 0,
      };

    case 'buy':
      return {
        currentMoney: state.currentMoney,
        insertedMoney: state.insertedMoney - action.incomeMoney,
      };

    default:
      throw new Error(`잘못된 액션 입력입니다. ${action.type}`);
  }
};

export const Wallet = () => {
  const {account, sinkedAccount} = useContext(UserAccount);
  const {insertMoney, userMoney} = useAccount(account, accountReducer);

  useEffect(() => {
    sinkedAccount(userMoney);
  }, [userMoney]);

  return (
    <WalletWrapper>
      <InsertButton
        handleMoneyBtn={insertMoney}
        insertBtnData={MONEY_BUTTON_DATA}
        walletState={userMoney}
      />
      <TotalMoney>{userMoney.currentMoney}</TotalMoney>
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

const TotalMoney = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid black;
  margin-top: 20px;
  margin-right: 10px;
`;
