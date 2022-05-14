import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from '@assets/styles/GlobalStyle';
import TabMenu from '@components/molecules/TabMenu';
import tabs from '@data/tabs';
import NotFound from '@pages/NotFound';
import VendingMachine from '@pages/VendingMachine';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TabMenu tabs={tabs} />
      <Routes>
        <Route path='/' element={<VendingMachine />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
