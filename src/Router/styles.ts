import styled from 'styled-components';

export const Container = styled.div`
  width: 1080px;
  margin: 30px auto;
`;

export const NavBarLayer = styled.nav``;

export const TabList = styled.ul`
  ${({ theme }) => theme.mixin.flexbox()};
  height: 50px;
  margin-bottom: 20px;
`;

export const Tab = styled.li`
  & + & {
    margin-left: 8px;
  }
`;

export const StyledSpan = styled.span`
  height: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.black};
  transition: all 400ms;

  &.active {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }
`;
