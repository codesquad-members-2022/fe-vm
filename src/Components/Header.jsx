import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EnTitle from './EnTitle';
import ToggleIcon from './ToggleIcon';
import { Color, FontSize, F_Center } from '../Assets/Common.style';

export default function Header() {
  const [active, setActive] = useState('vending-machine');

  const tabClickHandler = (menu) => {
    setActive(menu);
  };

  return (
    <HEADER>
      <TabMenu className={active}>
        <Link to="/" onClick={tabClickHandler.bind(null, 'vending-machine')}>
          <EnTitle
            title="Vending Machine"
            tag="h2"
            size={FontSize.DISPLAY}
            color={Color.BLACK}
          />
        </Link>
        <ToggleIcon />
        <Link to="/wallet" onClick={tabClickHandler.bind(null, 'wallet')}>
          <EnTitle
            title="Wallet"
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
