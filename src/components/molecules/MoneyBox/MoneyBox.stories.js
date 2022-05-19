import React from 'react';
import MoneyBox from 'components/molecules/MoneyBox';

export default {
  title: 'Molecules/MoneyBox',
  component: MoneyBox,
  argTypes: {
    unit: {
      control: 'string',
    },
    count: {
      control: 'string',
    },
  },
};

const Template = args => <MoneyBox {...args} />;

export const MaxMoneyBox = Template.bind({});
MaxMoneyBox.args = {
  unit: '10,000원',
  count: '500개',
};

export const DefaultMoneyBox = () => <MoneyBox />;
