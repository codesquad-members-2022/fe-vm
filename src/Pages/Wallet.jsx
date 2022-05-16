import React, {useContext} from 'react';
import styled from 'styled-components';

import {MONEY_BUTTON_DATA} from '../mocks/MoneyButtonData';
import {UserAccount} from '../Store';
import {InsertButton} from '../Component';

export const Wallet = () => {
  const {account} = useContext(UserAccount);
  console.log(account);
  return (
    <WalletWrapper>
      <InsertButton insertBtnData={MONEY_BUTTON_DATA} />
      <TotalMoney>{account.currentMoney}</TotalMoney>
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
