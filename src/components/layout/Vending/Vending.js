import React from 'react';
import Page from '../../UI/Page';
import VendingCards from './VendingCards';
import VendingForm from './VendingForm';

const Vending = (props) => {
  return (
    <Page display="flex">
      <VendingCards />
      <VendingForm />
    </Page>
  );
};

export default Vending;
