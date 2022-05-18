import React from "react";
import "./Wallet.css";
import WalletMachine from "../components/WalletMachine/WalletMachine";
import RechargeMoney from "../components/WalletRechargeMoney/RechargeMoney";

const Wallet = () => {
  return (
    <div className="wallet-wrapper">
      <WalletMachine />
      <RechargeMoney />
    </div>
  );
};

export default Wallet;
