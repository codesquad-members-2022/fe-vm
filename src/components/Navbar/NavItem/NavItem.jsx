import { NavLink } from "react-router-dom";

import Wrapper from "./NavItem.styled";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Wrapper>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "current-path link" : "link")}
      >
        {menuName}
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;
