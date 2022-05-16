import React from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import moneyData from '@/mock/money';
import { Title, SubTitle } from '@/styles/common';

import * as S from './Wallet.style';

const Wallet = () => {
  return (
    <S.WalletWrapper>
      <Title>MY WALLET</Title>
      <S.BalanceWrapper>
        <SubTitle>BALANCE</SubTitle>
        <CashDisplay isBalance={true} />
      </S.BalanceWrapper>

      <S.MoneyWrapper>
        <SubTitle>ADD MONEY</SubTitle>
        <S.MoneyItemWrapper>
          {moneyData.map(({ id, unit, count }) => (
            <li key={id}>
              <ItemBlock isMoney unit={unit} count={count} />
            </li>
          ))}
        </S.MoneyItemWrapper>
      </S.MoneyWrapper>
    </S.WalletWrapper>
  );
};

export default Wallet;
