import React from 'react';
import Page from '../../UI/Page';
import VendingCards from './VendingCards';
import VendingAside from './VendingAside';

const Vending = (props) => {
  return (
    <Page display="flex">
      <VendingCards />
      <VendingAside />
    </Page>
  );
};

export default Vending;
