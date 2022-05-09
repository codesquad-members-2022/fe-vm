import Header from './Header';

export default function Home(): JSX.Element {
  const texts = ['자판기', '지갑'];
  return <Header texts={texts}></Header>;
}
