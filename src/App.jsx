import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';

const App = () => (
  <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<VendingMachine />} />
          <Route path='vendingMachine' element={<VendingMachine />} />
          <Route path='wallet' element={<Wallet />} />
        </Route>
      </Routes>
    </Router>
  </div>
);

export default App;
