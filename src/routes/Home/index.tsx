import React from 'react';
import styled from 'styled-components';

import ActionLogs from '@/components/ActionLogs';
import Display from '@/components/Display';
import InputController from '@/components/InputController';

const Home = () => {
  return (
    <HomeLayout>
      <HomeLayer>
        <Display className={DISPLAY} />
        <InputController className={INPUT_CONTROLLER} />
        <ActionLogs className={ACTION_LOGS} />
      </HomeLayer>
    </HomeLayout>
  );
};

const DISPLAY = 'vm-display';
const INPUT_CONTROLLER = 'vm-input-controller';
const ACTION_LOGS = 'vm-action-logs';
const DISPLAY_WIDTH = 720;

const HomeLayout = styled.main`
  width: 1080px;
  border: 1px solid ${({ theme }) => theme.color.black};
`;

const HomeLayer = styled.div`
  display: grid;
  grid-template-columns: ${DISPLAY_WIDTH}px 360px;
  grid-template-rows: 120px ${DISPLAY_WIDTH - 120}px;
  word-break: break-word;

  .${DISPLAY} {
    padding: 20px;
    grid-row: 1/3;
    grid-column: 1/2;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-gap: 15px;
    overflow-y: auto;
  }

  .${ACTION_LOGS} {
    margin-right: 4px;
    border: 1px solid ${({ theme }) => theme.color.black};
  }
`;

export default Home;
