import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/atoms/Layout/Layout';
import VendingMachine from 'routes/VendingMachine/VendingMachine';
import Wallet from 'routes/Wallet/Wallet';
import { MoneyProvider } from 'components/atoms/Context/MoneyContext';

function App() {
  return (
    <BrowserRouter>
      <MoneyProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="vendingMachine" element={<VendingMachine />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
        </Routes>
      </MoneyProvider>
    </BrowserRouter>
  );
}

export default App;
