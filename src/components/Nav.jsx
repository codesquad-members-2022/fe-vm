import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

function Nav() {
  const activeStyle = ({ isActive }) => ({ backgroundColor: isActive ? "#512d6d" : "#9772fb" });

  return (
    <StyledNav>
      <ul>
        <Li>
          <NavLink to="/vendingmachine" style={activeStyle}>
            자판기
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/wallet" style={activeStyle}>
            지갑
          </NavLink>
        </Li>
      </ul>
    </StyledNav>
  );
}

export { Nav };
