import HeaderNav from "components/Nav/HeaderNav";
import WalletProvider from "contexts/WalletProvider";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default App;
