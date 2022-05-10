import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, VendingMachine, Wallet, NotFound } from "pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<VendingMachine />} />
            <Route path="/vendingmachine" element={<VendingMachine />} />
            <Route path="/wallet/*" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
