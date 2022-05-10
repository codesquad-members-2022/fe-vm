import { useState } from 'react';
import { Header } from './components/header/header';
import './App.css';

function App() {
  const [isVMClicked, setVMClicked] = useState(true);
  const [isWalletClicked, setWalletClicked] = useState(true);

  return (
    <>
      <Header
        VMStateObj={{ isVMClicked, setVMClicked }}
        WalletStateObj={{ isWalletClicked, setWalletClicked }}
      />
    </>
  );
}
export default App;
