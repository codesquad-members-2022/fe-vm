import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
    margin: ${({ theme }) => theme.margins.xxxl};
`;

const NavBtnItem = styled.li`
    margin: ${({ theme }) => theme.margins.medium};
`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding: ${({ theme }) => theme.paddings.medium};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    text-decoration: none;
    border-radius: ${({ theme }) => theme.borderRadiuses.medium};
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.black};
    &.active {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }
`;

export default NavBtn;
