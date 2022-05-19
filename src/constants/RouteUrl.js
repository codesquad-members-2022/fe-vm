import VendingMachine from 'components/organisms/VendingMachine';
import Wallet from 'components/organisms/Wallet';

const BASE_URL = process.env.PUBLIC_URL;

const RouteURL = [
  {
    id: 1,
    name: '자판기',
    path: '/',
    getElement: props => <VendingMachine {...props} />,
  },
  {
    id: 2,
    name: '지갑',
    path: '/wallet',
    getElement: props => <Wallet {...props} />,
  },
];

export { BASE_URL, RouteURL };
