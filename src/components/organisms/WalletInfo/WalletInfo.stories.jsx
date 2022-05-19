import WalletInfo from '@components/organisms/WalletInfo/index';
import money from '@data/money';

export default {
  title: 'Organism/WalletInfo',
  component: WalletInfo,
  args: {
    wallet: money,
    changeMoneyQuantity: () => {},
  },
};

export const Default = args => <WalletInfo {...args} />;
