import NotFound from "pages/NotFound";
import VendingMachine from "pages/VendingMachine";
import Wallet from "pages/Wallet";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "App";
import WalletProvider from "contexts/WalletProvider";

const routes = [
  {
    page: <VendingMachine />,
    path: "/",
    props: "index exact",
  },
  {
    page: <Wallet />,
    path: "/wallet",
    props: "",
  },
];

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.page} {...route.props} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
