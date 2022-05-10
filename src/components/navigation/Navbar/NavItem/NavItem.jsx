import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItem = ({ menuItem }) => {
  const { menuName, path } = menuItem;

  return (
    <Link to={path}>
      <MenuButton type="button">{menuName}</MenuButton>
    </Link>
  );
};

const MenuButton = styled.button`
  width: 10rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background-color: #fff;
  color: #000;
  font-weight: 800;
  font-size: 1.5rem;

  &:hover {
    background-color: #24292f;
    border-radius: 3rem;
    color: #fff;
  }
`;

export default NavItem;
