import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'components/organisms/Layout/Layout';
import VendingMachine from 'routes/VendingMachine/VendingMachine';
import Wallet from 'routes/Wallet/Wallet';
import { MoneyProvider } from 'context/MoneyContext';
import { ProductProvider } from 'context/ProductContext';

function App() {
  return (
    <BrowserRouter>
      <MoneyProvider>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="vendingMachine" element={<VendingMachine />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
          </Routes>
        </ProductProvider>
      </MoneyProvider>
    </BrowserRouter>
  );
}

export default App;
