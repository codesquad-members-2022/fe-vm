import { useState } from 'react';
import Header from '@/Components/Header';
import Machine from '@/Components/Machine';
import Wallet from '@/Components/Wallet';

export default function Home(): JSX.Element {
  const [tab, toggleTab] = useState('자판기');
  const texts = ['자판기', '지갑'];

  return (
    <>
      <Header texts={texts} tab={tab} toggleTab={toggleTab} />
      {tab === '자판기' ? <Machine /> : <Wallet />}
    </>
  );
}
