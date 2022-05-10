import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Mode from "./components/Header/Mode";
import Main from "./components/Main/Main";
import VendingMachine from "./components/Main/VendingMachine";
import Wallet from "./components/Main/Wallet";

const App = () => {
  const [vendingMode, setVendingMode] = useState(true);
  const [walletMode, setWalletMode] = useState(false);

  useEffect(() => {
    setVendingMode(!walletMode);
  }, [walletMode]);

  useEffect(() => {
    setWalletMode(!vendingMode);
  }, [vendingMode]);

  return (
    <>
      <Header>
        <Mode mode="자판기" isClicked={vendingMode} setClicked={setVendingMode} />
        <Mode mode="지갑" isClicked={walletMode} setClicked={setWalletMode} />
      </Header>
      <Main>{vendingMode ? <VendingMachine /> : <Wallet />}</Main>
    </>
  );
};

export default App;
