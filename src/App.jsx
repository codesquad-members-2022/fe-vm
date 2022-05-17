import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from 'Assets/Style/Global';
import GNB from 'components/Header/GNB';
import VM from 'pages/VM';
import Wallet from 'pages/Wallet';
import Store from 'pages/Store';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GNB />
      <Routes>
        <Route path="/" element={<VM />} />
        <Route path="/vm" element={<VM />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
};
export default App;
