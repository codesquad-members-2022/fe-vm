import React from 'react';

import * as Icons from '@assets/icons';
import * as S from '@components/atoms/Icon/Icon.style';

export const ICON_NAME = {
  SELECT_OPEN: 'SelectOpen',
  SELECT_CLOSE: 'SelectClose',
};

const Icon = ({ iconName }) => {
  return <S.Icon src={Icons[iconName]} />;
};

export default Icon;
