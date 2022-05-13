import React from 'react';
import ListItem from './ListItem';

export default {
  title: 'Atoms/ListItem',
  component: ListItem,
  argTypes: {
    sizeType: {
      options: ['short', 'long'],
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
    children: {
      control: 'string',
    },
  },
};

const Template = args => <ListItem {...args} />;
export const ShortListItem = Template.bind({});
ShortListItem.args = {
  flexType: 'rightCenter',
  sizeType: 'short',
  fontType: 'large',
  borderType: 'rounded',
  children: 'No Selected',
};
ShortListItem.storyName = 'ShortListItem';

export const DefaultListItem = () => <ListItem />;
