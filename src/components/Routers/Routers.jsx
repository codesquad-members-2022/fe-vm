import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, VendingMachine, Wallet, NotFound } from "pages";

function Routers() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<VendingMachine />} />
          <Route path="/vendingmachine" element={<VendingMachine />} />
          <Route path="/wallet/*" element={<Wallet />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export { Routers };
