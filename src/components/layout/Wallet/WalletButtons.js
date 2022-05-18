import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/container';
import { _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

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
    const newState = {};
    newState[`${newAmount}`] = 1;
    dispatchMoney({ type: 'INSERT', newState });
    dispatchLog({ type: 'INSERT', newAmount });
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
