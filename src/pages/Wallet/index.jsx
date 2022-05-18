import React, { useContext } from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import { ACTION } from '@/constants/actionType';
import { VendorContext } from '@/context/VendorProvider';
import { Title, SubTitle } from '@/styles/common';

import * as S from './Wallet.style';

const Wallet = () => {
  const {
    state: { cash, userCash },
    dispatch,
  } = useContext(VendorContext);

  const handleItemBlockClick = unit => {
    const selectedUnit = cash.find(m => m.unit === unit);
    if (!selectedUnit.count) {
      return;
    }
    selectedUnit.count--;

    dispatch({
      type: ACTION.ADD_MONEY,
      payload: {
        userCash,
        cash,
        unit,
      },
    });
  };

  return (
    <S.WalletWrapper>
      <Title>MY WALLET</Title>
      <S.BalanceWrapper>
        <SubTitle>BALANCE</SubTitle>
        <CashDisplay isBalance={true} balance={userCash} />
      </S.BalanceWrapper>

      <S.MoneyWrapper>
        <SubTitle>ADD MONEY</SubTitle>
        <S.MoneyItemWrapper>
          {cash.map(({ id, unit, count }) => (
            <li key={id} onClick={() => handleItemBlockClick(unit)}>
              <ItemBlock isMoney unit={unit} count={count} />
            </li>
          ))}
        </S.MoneyItemWrapper>
      </S.MoneyWrapper>
    </S.WalletWrapper>
  );
};

export default Wallet;
