import React from 'react';

import ActionLogs from '@/components/ActionLogs';
import Display from '@/components/Display';
import InputController from '@/components/InputController';

import * as S from './styles';

const Home = () => {
  return (
    <S.HomeLayout>
      <S.HomeLayer>
        <Display className={S.CN.DISPLAY} />
        <InputController className={S.CN.INPUT_CONTROLLER} />
        <ActionLogs className={S.CN.ACTION_LOGS} />
      </S.HomeLayer>
    </S.HomeLayout>
  );
};

export default Home;
