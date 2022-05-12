import React from 'react';

import PropTypes from 'prop-types';

import * as S from '@components/atoms/Tab/Tab.style';

const Tab = ({ $active, path, children }) => {
  return (
    <S.Tab to={path} $active={$active}>
      <span>{children}</span>
    </S.Tab>
  );
};

Tab.propTypes = {
  $active: PropTypes.bool,
  path: PropTypes.string,
};

Tab.defaultProps = {
  $active: true,
  path: '/',
};

export default Tab;
