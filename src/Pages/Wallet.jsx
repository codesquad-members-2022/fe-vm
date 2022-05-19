import React, {useContext, useEffect} from 'react';
import {useAccount} from '../Hooks/Account';
import styled from 'styled-components';

import {MONEY_BUTTON_DATA} from '../Mocks/MoneyButtonData';
import {UserAccount} from '../Store';
import {InsertButton} from '../Component';
import {accountReducer} from '../Reducer';

export const Wallet = () => {
  const {account, sinkedAccount} = useContext(UserAccount);
  const {insertMoney, userMoney, refundMoney} = useAccount(
    account,
    accountReducer,
  );

  useEffect(() => {
    sinkedAccount(userMoney);
  }, [userMoney]);

  return (
    <WalletWrapper>
      <InsertButton
        handleMoneyBtn={insertMoney}
        insertBtnData={MONEY_BUTTON_DATA}
        walletState={userMoney}
        refundMoney={refundMoney}
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
