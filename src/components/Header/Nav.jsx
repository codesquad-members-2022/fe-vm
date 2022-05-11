import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Menu>Vending machine</Menu>
      <Menu>Stock Manager</Menu>
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
