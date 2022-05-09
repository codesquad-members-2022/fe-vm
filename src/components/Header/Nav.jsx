import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 300px;
`;

const Menu = styled.span`
  margin: 0 50px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <Menu>{`Vending machine`}</Menu>
      <Menu>Stock Manager</Menu>
    </NavWrapper>
  );
};

export default Nav;
