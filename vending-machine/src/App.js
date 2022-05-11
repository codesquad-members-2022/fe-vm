import { Reset } from "styled-reset";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Layout from "./Layout";
import VendingMachine from "./VendingMachine";
import Wallet from "./Wallet";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
