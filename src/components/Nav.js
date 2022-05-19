import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavWrapper>
      <StyledNavLink to="/">자판기 </StyledNavLink>
      <StyledNavLink to="/wallet">지갑</StyledNavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  margin: 20px auto;
  font-family: "BMDoHyeon";
`;
const StyledNavLink = styled(NavLink)`
  padding: 10px 50px;
  &.active {
    color: ${({ theme }) => theme.colors.baeMint};
    border-bottom: 2px solid ${({ theme }) => theme.colors.baeMint};
  }
`;
