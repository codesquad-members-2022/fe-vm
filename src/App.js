import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import {
  ProductsProvider,
  WalletCashesProvider,
  TimerProvider,
  LogMessagesProvider,
} from 'context';
import { PATH } from 'constants';
import Layout from 'components/layout/Layout';
import { VendingMachine, Wallet, Admin, NotFound } from 'pages';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <TimerProvider>
          <WalletCashesProvider>
            <ProductsProvider>
              <LogMessagesProvider>
                <Routes>
                  <Route path={URL.INDEX} element={<Layout />}>
                    <Route index element={<Navigate to={PATH.VENDING_MACHINE} replace />} />
                    <Route path={PATH.VENDING_MACHINE} element={<VendingMachine />} />
                    <Route path={PATH.WALLET} element={<Wallet />} />
                    <Route path={PATH.ADMIN} element={<Admin />} />
                  </Route>
                  <Route path={PATH.ALL} element={<NotFound />} />
                </Routes>
              </LogMessagesProvider>
            </ProductsProvider>
          </WalletCashesProvider>
        </TimerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
