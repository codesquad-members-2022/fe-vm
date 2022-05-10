import React, { useContext } from 'react';
import styled from 'styled-components';

import ActionLogs from '@/components/ActionLogs';
import Display from '@/components/Display';
import InputController from '@/components/InputController';
import { VMContext } from '@/Provider/VMProvider';

const HomeLayer = styled.div`
  width: 1080px;
`;

const Home = () => {
  const value = useContext(VMContext);
  console.log(value);
  return (
    <HomeLayer>
      <Display />
      <InputController />
      <ActionLogs />
    </HomeLayer>
  );
};

export default Home;
