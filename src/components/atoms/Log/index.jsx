import React from 'react';

import PropTypes from 'prop-types';

import * as S from '@components/atoms/Log/Log.style';

export const LOG_TYPE = {
  NORMAL: 'normal',
  ERROR: 'error',
};

const Log = ({ type, content }) => {
  return <S.Log type={type}>{content}</S.Log>;
};

Log.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
};

export default Log;
