import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import TabMenu from '@components/molecules/TabMenu';
import tabs from '@data/tabs';

export default {
  title: 'Molecule/TabMenu',
  component: TabMenu,
  args: {
    tabs,
  },
};

export const Default = () => (
  <BrowserRouter>
    <TabMenu tabs={tabs} />
  </BrowserRouter>
);
