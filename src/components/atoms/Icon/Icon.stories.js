import React from 'react';
import Icon from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    iconName: {
      options: ['caretDown', 'balloonHeart', 'none'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => <Icon {...args} />;
export const VariousIcon = Template.bind({});
VariousIcon.args = {
  iconName: 'balloonHeart',
};

export const DefaultIcon = () => <Icon iconName={'caretDown'} />;
