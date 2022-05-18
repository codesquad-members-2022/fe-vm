import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import EnTitle from './EnTitle';
import {
  Absolute,
  Color,
  FontSize,
  F_Center,
  Relative,
} from '../Assets/Common.style';

export default function Header({ menu }) {
  const NavLinks = menu.map((nav) => {
    return (
      <NavLink
        key={nav.value}
        to={nav.path}
        className={({ isActive }) =>
          'nav-link ' + nav.value + (isActive ? ' active' : '')
        }
      >
        <EnTitle
          title={nav.title}
          tag="h2"
          size={FontSize.DISPLAY}
          color={Color.BLACK}
        />
      </NavLink>
    );
  });

  return (
    <HEADER>
      <TabMenu>{NavLinks}</TabMenu>
    </HEADER>
  );
}

const HEADER = styled.header`
  margin-bottom: 32px;
`;

const TabMenu = styled.nav`
  ${F_Center}

  .nav-link {
    border-bottom: 5px solid ${Color.GRAY};
    ${Relative}
    width: 100%;
    text-align: center;
    padding-bottom: 10px;

    &::after {
      content: '';
      ${Absolute}
      width: 100%;
      bottom: -5px;
      height: 5px;
      background: ${Color.ORANGE[200]};
      transition: 0.3s ease-out;
    }

    &.vending-machine::after {
      left: 100%;
    }

    &.wallet::after {
      left: -100%;
    }

    &.active::after {
      left: 0;
    }
  }
`;
