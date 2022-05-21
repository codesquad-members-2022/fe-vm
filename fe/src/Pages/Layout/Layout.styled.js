import { applyFlex } from "Helper/utils";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  position: relative;
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
  margin-bottom: 20px;
`;
export const NavLi = styled.li`
  list-style: none;
  text-decoration: none;
  margin-right: 20px;
  font-size: 1.75rem;
  border: 2px solid #3f51b5;
  width: 150px;
  height: 50px;
  box-shadow: 0px 0px 20px 1px rgb(200, 200, 200);

  a {
    ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
    text-align: center;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    text-decoration: none;
    color: #000;
  }
`;

export const InformationMessage = styled.div`
  position: absolute;
  ${({ left, top }) => {
    return `left:${left}; top:${top}`;
  }};
  font-weight: 500;
  font-size: 1.25rem;
`;
