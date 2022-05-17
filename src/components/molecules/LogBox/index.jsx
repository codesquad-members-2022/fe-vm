import React from 'react';

import Log from '@components/atoms/Log';
import * as S from '@components/molecules/LogBox/LogBox.style';

const LogBox = ({ logs }) => {
  return (
    <S.Container>
      <S.LogBox>
        {logs.map(log => (
          <Log {...log} />
        ))}
      </S.LogBox>
    </S.Container>
  );
};

export default LogBox;
