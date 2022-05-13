import { Outlet } from 'react-router-dom';
import LinkNav from 'components/molecules/LinkNav/LinkNav';
import { GlobalStyle, StyledWrapper } from 'routes/Layout/Layout.style';
// import { MoneyProvider } from 'components/atoms/Context/MoneyContext';

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
