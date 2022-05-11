import Button from "components/common/form/Button/Button";
import { Link, useLocation } from "react-router-dom";

import { navButtonStyle, Wrapper } from "./NavItem.styled";

const NavItem = ({ menuItem }) => {
  const { pathname } = useLocation();
  const { menuName, path } = menuItem;

  return (
    <Wrapper isCurrentLocation={pathname === path}>
      <Link to={path}>
        <Button styles={navButtonStyle} data={{ name: menuName }} />
      </Link>
    </Wrapper>
  );
};

export default NavItem;
