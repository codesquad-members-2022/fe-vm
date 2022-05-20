import { Outlet } from 'react-router-dom';
import { SwitchBox } from '../components/switchBox/switchBox';
import { WalletProvider } from '../context/walletProvider';
import { LogProvider } from '../context/logProvider';
import { InputMoneyProvider } from '../context/inputMoneyProvider';
import { ProgressProvider } from '../context/progressProvider';
import { PaybackTimerProvider } from '../context/paybackTimerProvider';

export function Home() {
  return (
    <>
      <SwitchBox />
      <WalletProvider>
        <LogProvider>
          <InputMoneyProvider>
            <ProgressProvider>
              <PaybackTimerProvider>
                <Outlet />
              </PaybackTimerProvider>
            </ProgressProvider>
          </InputMoneyProvider>
        </LogProvider>
      </WalletProvider>
    </>
  );
}
