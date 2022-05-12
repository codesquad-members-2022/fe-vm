import React from 'react';

import PropTypes from 'prop-types';

import Tab from '@components/atoms/Tab';
import * as S from '@components/molecules/TabMenu/TabMenu.style';

// TODO: 현재 활성화된 탭 상태로 관리
const TabMenu = ({ tabs }) => {
  return (
    <S.TabMenu>
      {tabs.map(({ id, $active, path, content }) => (
        <Tab key={id} $active={$active} path={path}>
          {content}
        </Tab>
      ))}
    </S.TabMenu>
  );
};

TabMenu.propTypes = {
  tabs: PropTypes.array,
};

export default TabMenu;
