import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/layout';
import NotFound from '@/pages/NotFound';
import Stock from '@/pages/Stock';
import Vendor from '@/pages/Vendor';
import Wallet from '@/pages/Wallet';

const App = () => {
  return (
    <Router basename={BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Vendor />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="stock" element={<Stock />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
