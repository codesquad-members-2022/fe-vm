import React from 'react';

import Select from '@components/atoms/Select';
import money from '@data/money';
import { formatPrice } from '@lib/utils';

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
    selectValue: money.map(item => `${item.unit}원`)[0],
    setSelectValue: () => {},
  },
  argTypes: {
    selectValue: {
      control: {
        type: 'radio',
      },
      options: money.map(item => `${formatPrice(item.unit)}원`),
    },
  },
};

export const Default = args => <Select {...args} />;
