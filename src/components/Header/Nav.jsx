import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Link to="/vending-machine">
        <Menu>Vending machine</Menu>
      </Link>
      <Link to="stock-manager">
        <Menu>Stock Manager</Menu>
      </Link>
    </>
  );
};

const Menu = styled.span`
  margin-right: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
`;

export default Nav;
