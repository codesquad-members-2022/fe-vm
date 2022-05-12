import React from 'react';

import Button, { BUTTON_THEME, BUTTON_SIZE } from '@components/atoms/Button';

export default {
  title: 'Atom/Button',
  component: Button,
  args: {
    theme: BUTTON_THEME.DEFAULT,
    size: BUTTON_SIZE.MEDIUM,
    onClick: () => {},
    disabled: false,
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
      },
      options: [BUTTON_THEME.DEFAULT, BUTTON_THEME.ROUNDED],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: [BUTTON_SIZE.SMALL, BUTTON_SIZE.MEDIUM, BUTTON_SIZE.LARGE, BUTTON_SIZE.X_LARGE],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Default = args => <Button {...args}>버튼</Button>;
