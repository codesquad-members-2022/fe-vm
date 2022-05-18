import React, { useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/container';
import { _, CURRENCY } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

const WalletButton = ({ id, unit, onClick }) => {
  return (
    <MoneyButton id={id} unit={unit} onClick={onClick}>
      {unit}
    </MoneyButton>
  );
};

const WalletButtons = () => {
  const amountCtx = useContext(AmountContext);

  const onClickHandler = useCallback((e) => {
    const clickedUnit = e.target.textContent.trim();
    amountCtx.setWallet((prev) => {
      const newWallet = {};
      newWallet[`${clickedUnit}`] = prev[`${clickedUnit}`] - 1;

      return { ...prev, ...newWallet };
    });

    amountCtx.setInsertedMoney((prev) => {
      const newInsertedMoney = {};
      newInsertedMoney[`${clickedUnit}`] = prev[`${clickedUnit}`] + 1;

      return { ...prev, ...newInsertedMoney };
    });
    // todo - 이부분 공통적인 부분 많으니까 수정할 방법 찾아서 수정하기
  }, []);

  return (
    <>
      <Container width="100%" height="10%" flexInfo={[_, _, 'space-around']}>
        {CURRENCY.map((v) => (
          <WalletButton
            id={v.id}
            key={v.id}
            unit={v.unit}
            onClick={onClickHandler}
          />
        ))}
      </Container>
      <Container width="100%" height="20%" flexInfo={[_, _, 'space-around']}>
        {Object.values(amountCtx.wallet).map((v, i) => (
          <MoneyButton key={i}>{v}</MoneyButton>
        ))}
      </Container>
    </>
  );
};

export default WalletButtons;

const MoneyButton = styled(Button)`
  width: 80px;
  height: 80px;
  background: blue;
`;
