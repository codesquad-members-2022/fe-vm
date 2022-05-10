import Header from './Header';
import Machine from './Machine';
import Wallet from './Wallet';

export default function Home(): JSX.Element {
  const texts = ['자판기', '지갑'];
  return (
    <>
      <Header texts={texts}></Header>
      <Wallet />
    </>
  );
}
