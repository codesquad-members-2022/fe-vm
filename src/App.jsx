import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StocksProvider } from "./contextProviders/StockProvider";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

const App = () => (
  <StocksProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </Router>
  </StocksProvider>
);

export default App;
