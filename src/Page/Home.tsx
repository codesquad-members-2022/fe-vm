import { useState, useEffect, useRef } from 'react';
import Header from '@/Components/Header';
import Machine from '@/Components/Machine';
import Wallet from '@/Components/Wallet';

import { useWalletDispatch } from '@/Context/WalletContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

import { responseDelay } from '@/Constants';
import keepTheChange from '@/Utils/keepTheChange';
import useTimeout from '@/Utils/useTimeout';

export default function Home(): JSX.Element {
  const [tab, toggleTab] = useState('자판기');
  const texts = ['자판기', '지갑'];

  const priceState = usePriceState();
  const walletDispatch = useWalletDispatch();
  const priceDispatch = usePriceDispatch();

  const timerId = useRef(null);

  const timeOutCallback = () => {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = useTimeout(
      () => keepTheChange(priceState, walletDispatch, priceDispatch),
      responseDelay,
    );
  };

  useEffect(() => {
    timeOutCallback();
  }, [priceState]);

  return (
    <>
      <Header texts={texts} tab={tab} toggleTab={toggleTab} />
      {tab === '자판기' ? <Machine timerId={timerId} /> : <Wallet />}
    </>
  );
}
