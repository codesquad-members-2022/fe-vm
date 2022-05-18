import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/index';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import NotFound from 'pages/NotFound';

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VendingMachine />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
