import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/Layout';
import { VendingMachine, Wallet, Admin, NotFound } from 'components/pages';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<VendingMachine />} />
            <Route path='vendingMachine' element={<VendingMachine />} />
            <Route path='wallet' element={<Wallet />} />
            <Route path='admin' element={<Admin />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
