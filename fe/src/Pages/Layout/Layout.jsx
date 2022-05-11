import { NAV_MENUS } from 'Helper/constant';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutContainer, NavContainer, NavLi, NavUl } from './Layout.styled';

export default function Layout() {
  const navigations = NAV_MENUS.map(({ id, name, path }) => {
    return (
      <NavLi key={id} flex justify="center" align="center">
        <NavLink to={path}>
          <div>{name}</div>
        </NavLink>
      </NavLi>
    );
  });

  return (
    <LayoutContainer>
      <NavContainer>
        <NavUl flex>{navigations}</NavUl>
      </NavContainer>

      <Outlet />
    </LayoutContainer>
  );
}
