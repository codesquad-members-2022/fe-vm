import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "styled-components";

export default function Nav() {
  const { colors } = useTheme();
  const navStyle = {
    padding: "10px 50px",
  };
  const activeNavStyle = {
    ...navStyle,
    color: colors.baeMint,
    borderBottom: `2px solid ${colors.baeMint}`,
  };

  return (
    <NavWrapper>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeNavStyle : navStyle)}>
        자판기
      </NavLink>
      <NavLink to="/wallet" style={({ isActive }) => (isActive ? activeNavStyle : navStyle)}>
        지갑
      </NavLink>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  margin: 20px auto;
  font-family: "BMDoHyeon";
`;
