import React from 'react';

import Button, { ButtonSize, ButtonTheme } from '@components/atoms/Button';

export default {
  title: 'Atom/Button',
  component: Button,
  args: {
    theme: ButtonTheme.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => {},
    disabled: false,
  },
  argTypes: {
    theme: {
      control: {
        type: 'radio',
      },
      options: [ButtonTheme.DEFAULT, ButtonTheme.ROUNDED],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: [ButtonSize.SMALL, ButtonSize.MEDIUM, ButtonSize.LARGE, ButtonSize.X_LARGE],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Default = args => <Button {...args}>버튼</Button>;
