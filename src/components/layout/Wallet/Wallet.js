import React from 'react';
import Page from '../../UI/Page';
import WalletButtons from './WalletButtons';
import CurrentInsertMoney from './CurrentInsertMoney';

const Wallet = () => {
  return (
    <Page flexInfo={['column']}>
      <CurrentInsertMoney />
      <WalletButtons />
    </Page>
  );
};

export default React.memo(Wallet);
