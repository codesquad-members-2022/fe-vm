import React, { useContext } from 'react';

import CashDisplay from '@/components/CashDisplay';
import ItemBlock from '@/components/ItemBlock';
import { VendorContext } from '@/context/VendorProvider';
import { Title, SubTitle } from '@/styles/common';

import * as S from './Wallet.style';

const Wallet = () => {
  const { cash, setCash, balance, setBalance } = useContext(VendorContext);

  const handleItemBlockClick = unit => {
    const selectedUnit = cash.find(m => m.unit === unit);
    if (!selectedUnit.count) return;
    selectedUnit.count--;
    setBalance(balance + unit);
    setCash([...cash]);
  };

  return (
    <S.WalletWrapper>
      <Title>MY WALLET</Title>
      <S.BalanceWrapper>
        <SubTitle>BALANCE</SubTitle>
        <CashDisplay isBalance={true} balance={balance} />
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
