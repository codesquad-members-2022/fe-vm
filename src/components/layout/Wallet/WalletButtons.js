import React, { useContext } from 'react';
import styled from 'styled-components';
import AmountContext from '../../../store/AmountContext';
import Button from '../../UI/Button';
import Container from '../../UI/container';
import { _ } from '../../../constant/constant';

const WalletButton = ({ unit, onClick, isDisabled }) => {
  return (
    <MoneyButton unit={unit} key={unit} onClick={onClick} disabled={isDisabled}>
      {unit}
    </MoneyButton>
  );
};

const WalletButtons = () => {
  const { money, dispatchMoney, dispatchLog } = useContext(AmountContext);

  const onClickHandler = (e) => {
    const newAmount = e.target.textContent.trim();
    const newInsert = {};
    newInsert[`${newAmount}`] = 1;
    dispatchMoney({ type: 'INSERT', payload: newInsert });
    dispatchLog({ type: 'INSERT', payload: newAmount });
  };

  return (
    <>
      <Container width="100%" height="10%" flexInfo={[_, _, 'space-around']}>
        {Object.keys(money.WALLET).map((v) => (
          <WalletButton
            key={v}
            unit={v}
            onClick={onClickHandler}
            isDisabled={money.WALLET[v] ? false : true}
          />
        ))}
      </Container>
      <Container width="100%" height="20%" flexInfo={[_, _, 'space-around']}>
        {Object.values(money.WALLET).map((v, i) => (
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
