import React from 'react';

import * as S from '@components/atoms/Log/Log.style';

export const LOG_TYPE = {
  NORMAL: 'normal',
  ERROR: 'error',
};

const Log = ({ type, content }) => {
  return <S.Log type={type}>{content}</S.Log>;
};

export default Log;
