import styled from "styled-components";
import { Nav } from "components";

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  padding-top: 20px;
  margin-bottom: 10px;

  ul {
    display: flex;
    margin-bottom: 20px;
  }
`;

const Li = styled.li`
  & + & {
    margin-left: 1rem;
  }

  a {
    display: grid;
    place-items: center;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
`;

function MainNav() {
  const activeStyle = ({ isActive }) => ({ backgroundColor: isActive ? "#512d6d" : "#9772fb" });

  return (
    <StyledNav>
      <ul>
        <Li>
          <Nav link="/vendingmachine" activeStyle={activeStyle}>
            자판기
          </Nav>
        </Li>
        <Li>
          <Nav to="/wallet" activeStyle={activeStyle}>
            지갑
          </Nav>
        </Li>
      </ul>
    </StyledNav>
  );
}

export { MainNav };
