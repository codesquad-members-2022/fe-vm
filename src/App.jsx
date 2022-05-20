import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from '@assets/styles/GlobalStyle';
import TabMenu from '@components/molecules/TabMenu';
import { MoneyProvider } from '@context/money/provider';
import tabs from '@data/tabs';
import NotFound from '@pages/NotFound';
import VendingMachine from '@pages/VendingMachine';
import Wallet from '@pages/Wallet';

function App() {
  return (
    <MoneyProvider>
      <BrowserRouter>
        <GlobalStyle />
        <TabMenu tabs={tabs} />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MoneyProvider>
  );
}

export default App;
