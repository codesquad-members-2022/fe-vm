import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EnTitle from './EnTitle';
import ToggleIcon from './ToggleIcon';
import { Color, FontSize, F_Center } from '../Assets/Common.style';

export default function Header({ menu }) {
  const [active, setActive] = useState('vending-machine');

  const tabClickHandler = (menu) => {
    setActive(menu);
  };

  return (
    <HEADER>
      <TabMenu className={active}>
        <Link
          to={`/${menu.menu1.value}`}
          onClick={tabClickHandler.bind(null, menu.menu1.value)}
        >
          <EnTitle
            title={menu.menu1.title}
            tag="h2"
            size={FontSize.DISPLAY}
            color={Color.BLACK}
          />
        </Link>
        <ToggleIcon />
        <Link
          to={`/${menu.menu2.value}`}
          onClick={tabClickHandler.bind(null, menu.menu2.value)}
        >
          <EnTitle
            title={menu.menu2.title}
            tag="h2"
            size={FontSize.DISPLAY}
            color={Color.BLACK}
          />
        </Link>
      </TabMenu>
    </HEADER>
  );
}

const HEADER = styled.header`
  margin-bottom: 32px;
`;

const TabMenu = styled.nav`
  ${F_Center}

  .nav-link {
    min-width: 200px;
  }

  &.vending-machine .toggle-circle {
    left: 5px;
  }

  &.wallet .toggle-circle {
    left: 65px;
  }
`;
