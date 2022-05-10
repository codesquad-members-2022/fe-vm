import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'common/globalStyle';
import Layout from 'components/Layout';
import { MoneyProvider } from 'context/MoneyProvider';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';

const App = () => (
  <div className='App'>
    <GlobalStyle />
    <MoneyProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<VendingMachine />} />
            <Route path='vendingMachine' element={<VendingMachine />} />
            <Route path='wallet' element={<Wallet />} />
          </Route>
        </Routes>
      </Router>
    </MoneyProvider>
  </div>
);

export default App;
