import React from 'react';

import Select from '@components/atoms/Select';
import money from '@data/money';

const options = money.map(item => {
  return {
    id: item.id,
    value: item.unit,
    label: `${item.unit}원`,
  };
});

export default {
  title: 'Atom/Select',
  component: Select,
  args: {
    options,
    selectValue: options[0],
    setSelectValue: () => {},
  },
};

export const Default = args => <Select {...args} />;
