import { Outlet } from 'react-router-dom';
import { SwitchBox } from '../components/switchBox/switchBox';
import { WalletProvider } from '../context/walletProvider';

export function Home() {
  return (
    <>
      <SwitchBox />
      <WalletProvider>
        <Outlet />
      </WalletProvider>
    </>
  );
}
