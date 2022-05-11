import styled from "styled-components";
import Nav from "./Nav";
import { whaleImgSrc } from "../../styles/icons";

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

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.navy};
`;

const HeaderContent = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  width: 80px;
  height: 80px;
  margin: 0 60px;
  background: url(${whaleImgSrc}) no-repeat center;
  background-size: cover;
  filter: invert(100%);
`;

export default Header;
