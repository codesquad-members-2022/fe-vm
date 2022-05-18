import React from 'react';
import Label from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    sizeType: {
      options: ['small', 'medium', 'large', 'xLarge'],
      control: { type: 'radio' },
    },
    fontType: {
      options: ['medium', 'large', 'logo', 'digital'],
      control: { type: 'radio' },
    },
    borderType: {
      options: ['default', 'rounded', 'none'],
      control: { type: 'radio' },
    },
    flexType: {
      options: ['center', 'centerLeft', 'centerRight'],
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
  flexType: 'centerRight',
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
