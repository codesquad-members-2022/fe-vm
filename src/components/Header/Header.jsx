import styled from "styled-components";
import Nav from "./Nav";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #022044;
`;

const HeaderContent = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>Icon place</Logo>
        <Nav />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
