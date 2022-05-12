import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import { PATH } from 'constants';
import Layout from 'components/layout/Layout';
import { VendingMachine, Wallet, Admin, NotFound } from 'components/pages';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path={URL.INDEX} element={<Layout />}>
              <Route path={PATH.VENDING_MACHINE} element={<VendingMachine />} />
              <Route path={PATH.WALLET} element={<Wallet />} />
              <Route path={PATH.ADMIN} element={<Admin />} />
            </Route>
            <Route path={PATH.ALL} element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
