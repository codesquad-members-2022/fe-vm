import styled from "styled-components";
import { NavLink } from "react-router-dom";

function NavBtn() {
    return (
        <NavBtnList>
            <NavBtnItem>
                <StyledNavLink to="/">자판기</StyledNavLink>
            </NavBtnItem>
            <NavBtnItem>
                <StyledNavLink to="/wallet">지갑</StyledNavLink>
            </NavBtnItem>
        </NavBtnList>
    );
}

const NavBtnList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 5rem;
`;

const NavBtnItem = styled.li`
    border: 1px solid #000;
`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding: 1rem;
    text-decoration: none;
    color: #000;
    font-size: 2rem;
    &.active {
        background-color: #666;
        color: #fff;
    }
`;

export default NavBtn;
