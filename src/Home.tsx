import { useState } from 'react';
import Header from '@/Header';
import Machine from '@/Machine';
import Wallet from '@/Wallet';

export default function Home(): JSX.Element {
  const [tab, setTab] = useState('자판기');
  const texts = ['자판기', '지갑'];

  const handleTab = (text: string) => {
    setTab(text);
  };

  return (
    <>
      <Header texts={texts} tab={tab} handleTab={handleTab}></Header>
      {tab === '자판기' ? <Machine /> : <Wallet />}
    </>
  );
}
