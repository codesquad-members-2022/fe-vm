import React from 'react';
import {Outlet} from 'react-router-dom';

import {UiChangeBtn} from '../Component';

export const Home = () => {
  return (
    <>
      <UiChangeBtn />
      <Outlet />
    </>
  );
};
