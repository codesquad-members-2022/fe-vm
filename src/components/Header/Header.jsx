import styled from "styled-components";
import Nav from "./Nav";
import { whaleImgSrc } from "../../styles/icons";

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
  margin: 0 60px;
  background: url(${whaleImgSrc}) no-repeat center;
  background-size: cover;
  filter: invert(100%);
  width: 80px;
  height: 80px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        <Nav />
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
