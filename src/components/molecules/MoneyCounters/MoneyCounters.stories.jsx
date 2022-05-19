import MoneyCounters from '@components/molecules/MoneyCounters/index';
import money from '@data/money';

export default {
  title: 'Molecule/MoneyCounters',
  component: MoneyCounters,
  args: {
    wallet: money,
    changeMoneyQuantity: () => {},
  },
};

export const Default = args => <MoneyCounters {...args} />;
