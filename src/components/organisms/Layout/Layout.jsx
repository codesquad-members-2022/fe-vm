import { Outlet } from 'react-router-dom';
import LinkNav from 'components/molecules/LinkNav/LinkNav';
import {
  GlobalStyle,
  StyledWrapper,
} from 'components/organisms/Layout/Layout.style';

function Layout() {
  return (
    <>
      <GlobalStyle />
      <StyledWrapper>
        <LinkNav />
        <Outlet />
      </StyledWrapper>
    </>
  );
}

export default Layout;
