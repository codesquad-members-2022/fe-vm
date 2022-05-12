import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/container';
import { _, CURRENCY } from '../../../constant/constant';

const WalletButton = (props) => {
  return <MoneyButton id={props.id}>{props.unit}</MoneyButton>;
};

const WalletButtons = (props) => {
  return (
    <>
      <Container width="100%" height="10%" flexInfo={[_, _, 'space-around']}>
        {CURRENCY.map((v) => (
          <WalletButton id={v.id} key={v.id} unit={v.unit} />
        ))}
      </Container>

      <Container width="100%" height="20%" flexInfo={[_, _, 'space-around']}>
        {CURRENCY.map((v) => (
          <WalletButton id={v.id} key={v.id} unit={v.unit} />
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
