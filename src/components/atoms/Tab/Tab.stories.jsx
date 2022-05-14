import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Tab from '@components/atoms/Tab';

export default {
  title: 'Atom/Tab',
  component: Tab,
  args: {
    $active: true,
    path: '/',
  },
  argTypes: {
    $active: {
      control: {
        type: 'boolean',
      },
    },
    path: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = ({ path, $active }) => (
  <BrowserRouter>
    <Tab to={path} $active={$active}>
      자판기
    </Tab>
  </BrowserRouter>
);
