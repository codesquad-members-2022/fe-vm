import MoneyCounter from '@components/molecules/MoneyCounter';
import money from '@data/money';

export default {
  title: 'Molecule/MoneyCounter',
  component: MoneyCounter,
  args: {
    money: money[0],
  },
};

export const Default = args => <MoneyCounter {...args} />;
