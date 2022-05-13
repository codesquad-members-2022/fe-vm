import React from 'react';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    sizeType: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    fontType: {
      options: ['medium', 'large', 'logo'],
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
  children: '500원',
};
LargeLabel.storyName = 'LargeLabel';

export const EmojiLabel = Template.bind({});
EmojiLabel.args = {
  flexType: 'center',
  sizeType: 'medium',
  fontType: 'logo',
  borderType: 'none',
  children: '🍿',
};
EmojiLabel.storyName = 'EmojiLabel';

export const DefaultLabel = () => <Label />;
