import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin: 0 auto;
  padding: 48px;
  max-width: 1280px;
  width: 100%;
`;

export default Layout;
