import React from 'react';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    sizeType: {
      options: ['small', 'large'],
      control: { type: 'radio' },
    },
    fontType: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
    },
    borderType: {
      options: ['default', 'rounded', 'none'],
      control: { type: 'radio' },
    },
    flexType: {
      options: ['center', 'leftCenter', 'rightCenter'],
      control: { type: 'radio' },
    },
    children: {
      control: 'string',
    },
  },
};

const Template = args => <Label {...args} />;
export const LargeLabel = Template.bind({});
LargeLabel.args = {
  flexType: 'rightCenter',
  sizeType: 'large',
  fontType: 'xxLarge',
  borderType: 'rounded',
  children: '1,000,000원',
};
LargeLabel.storyName = 'LargeLabel';

export const DefaultLabel = () => <Label />;
