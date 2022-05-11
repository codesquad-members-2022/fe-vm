import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 1060px;
  margin-left: 20px;
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavUl = styled.ul`
  ${({ flex }) => applyFlex({ flex })};
  padding-left: 0px;
`;
export const NavLi = styled.li`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  list-style: none;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.75rem;
  padding: 20px;
  border: 2px solid #3f51b5;
  width: 150px;
  height: 50px;

  a {
    text-decoration: none;
    color: #000;
  }
`;
