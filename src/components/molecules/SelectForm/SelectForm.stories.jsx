import SelectForm from '@components/molecules/SelectForm/index';
import money from '@data/money';

const options = money.map(item => {
  return {
    id: item.id,
    value: item.unit,
    label: `${item.unit}원`,
  };
});

export default {
  title: 'Molecule/SelectForm',
  component: SelectForm,
  args: {
    options: options,
    onClick: () => {},
  },
};

export const Default = args => <SelectForm {...args} />;
