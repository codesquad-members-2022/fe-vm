import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'common/globalStyle';
import { composeProvider } from 'common/utils';
import Layout from 'components/Layout';
import { LogProvider } from 'context/LogProvider';
import { MoneyProvider } from 'context/MoneyProvider';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';

const ContextProvider = composeProvider([LogProvider, MoneyProvider]);

const App = () => (
  <div className='App'>
    <GlobalStyle />
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<VendingMachine />} />
            <Route path='vendingMachine' element={<VendingMachine />} />
            <Route path='wallet' element={<Wallet />} />
          </Route>
        </Routes>
      </Router>
    </ContextProvider>
  </div>
);

export default App;
