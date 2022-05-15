import NotFound from "pages/NotFound";
import VendingMachine from "pages/VendingMachine";
import Wallet from "pages/Wallet";
import React from "react";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "App";

const VMRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default VMRouter;
