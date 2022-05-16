import { useEffect, useState } from 'react';
import GlobalStlyes from './Assets/GlobalStyles';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import './App.css';

function App() {
  const [isVMClicked, setVMClicked] = useState(true);

  const [isWalletClicked, setWalletClicked] = useState(
    () => JSON.parse(localStorage.getItem('Wallet')) || false
  );

  useEffect(() => {
    localStorage.setItem('Wallet', JSON.stringify(isWalletClicked));
  }, [isWalletClicked]);

  return (
    <>
      <GlobalStlyes />
      <Header
        VMStateObj={{ isVMClicked, setVMClicked }}
        WalletStateObj={{ isWalletClicked, setWalletClicked }}
      />
      <Main isVMClicked={isVMClicked} isWalletClicked={isWalletClicked} />
    </>
  );
}
export default App;
