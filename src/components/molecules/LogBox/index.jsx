import React from 'react';

import PropTypes from 'prop-types';

import Log from '@components/atoms/Log';
import * as S from '@components/molecules/LogBox/LogBox.style';

const LogBox = ({ logs }) => {
  return (
    <S.Container>
      <S.LogBox>
        {logs.map(log => (
          <Log key={log.id} {...log} />
        ))}
      </S.LogBox>
    </S.Container>
  );
};

LogBox.propTypes = {
  logs: PropTypes.array,
};

export default LogBox;
