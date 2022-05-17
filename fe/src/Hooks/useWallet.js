import { WalletMoneyContext, SetWalletMoneyContext } from "App";
import { useContext } from "react";

export default function useWallet() {
  const [walletMoney, setWalletMoney] = [useContext(WalletMoneyContext), useContext(SetWalletMoneyContext)];
  return [walletMoney, setWalletMoney];
}
