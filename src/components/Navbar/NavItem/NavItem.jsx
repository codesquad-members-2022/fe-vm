import { NavLink } from "react-router-dom";

import Wrapper, { CLASS_NAME } from "./NavItem.styled";

const getClassName = (isCurrentPath) => {
  const { ACTIVE, LINK } = CLASS_NAME;
  return isCurrentPath ? `${ACTIVE} ${LINK}` : LINK;
};

const handleClickNavLink = (e) => {
  if (!e.target.classList.contains(CLASS_NAME.ACTIVE)) {
    return;
  }

  e.preventDefault();
};

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Wrapper>
      <NavLink
        to={path}
        className={({ isActive }) => getClassName(isActive)}
        onClick={handleClickNavLink}
      >
        {menuName}
      </NavLink>
    </Wrapper>
  );
};

export default NavItem;
