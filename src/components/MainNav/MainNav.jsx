import { Nav } from "components";
import { StyledNav, Li } from "./MainNav.styled";

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
