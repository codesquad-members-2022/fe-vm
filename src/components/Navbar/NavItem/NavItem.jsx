import Button from "components/common/form/Button/Button";
import { NavLink } from "react-router-dom";

import { Wrapper, navButtonStyle } from "./NavItem.styled";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Wrapper>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "current-path" : "nav-link")}
      >
        <Button styles={navButtonStyle} data={{ name: menuName }} />
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;
