import React from 'react';
import Page from '../../UI/Page';
import WalletButtons from './WalletButtons';
import CurrentInsertMoney from './CurrentInsertMoney';

const Wallet = (props) => {
  return (
    <Page flexInfo={['column']} style={{ background: 'red' }}>
      <CurrentInsertMoney />
      <WalletButtons />
    </Page>
  );
};

export default Wallet;
