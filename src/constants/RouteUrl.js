import VMPage from 'pages/VendingMachine/VMPage';
import WalletPage from 'pages/Wallet/WalletPage';

const BASE_URL = process.env.PUBLIC_URL;

const RouteURL = [
  {
    id: 1,
    name: '자판기',
    path: '/',
    getElement: props => <VMPage {...props} />,
  },
  {
    id: 2,
    name: '지갑',
    path: '/wallet',
    getElement: props => <WalletPage {...props} />,
  },
];

export { BASE_URL, RouteURL };
