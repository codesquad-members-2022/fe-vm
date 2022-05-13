import React from 'react';
import Header from './Components/Header';
import Main from './Page';

const MENU = {
  menu1: {
    title: 'Vending Machine',
    value: 'vending-machine',
  },
  menu2: {
    title: 'Wallet',
    value: 'wallet',
  },
};

function App() {
  return (
    <>
      <Header menu={MENU} />
      <Main />
    </>
  );
}

export default App;
