import React from 'react';
import Header from './Components/Header';
import MainContents from './Components/MainContents';

const MENU = [
  {
    title: 'Vending Machine',
    value: 'vending-machine',
    path: '/',
  },
  {
    title: 'Wallet',
    value: 'wallet',
    path: '/wallet',
  },
];

function App() {
  return (
    <>
      <Header menu={MENU} />
      <MainContents />
    </>
  );
}

export default App;
