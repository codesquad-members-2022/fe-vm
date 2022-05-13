import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'routes/Layout/Layout';
import VendingMachine from 'routes/VendingMachine/VendingMachine';
import Wallet from 'routes/Wallet/Wallet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="vendingMachine" element={<VendingMachine />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
