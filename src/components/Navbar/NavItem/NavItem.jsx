import Button from "components/common/form/Button/Button";
import { Link } from "react-router-dom";

import navButtonStyle from "./NavItem.styled";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;
  return (
    <Link to={path}>
      <Button style={navButtonStyle} data={{ name: menuName }} />
    </Link>
  );
};

export default NavItem;
