import React from 'react';

import Select from '@components/atoms/Select';
import { options } from '@components/molecules/SelectForm';

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
