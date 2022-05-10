import styled from "styled-components";

const Header = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: center;
  padding: 2rem 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Header;
