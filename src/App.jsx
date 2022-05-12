import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StocksProvider } from "./contextProviders/StockProvider";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import StockManager from "./pages/StockManager";

const App = () => (
  <StocksProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="vending-machine" element={<Main />} />
          <Route path="stock-manager" element={<StockManager />} />
        </Route>
      </Routes>
    </Router>
  </StocksProvider>
);

export default App;
