import styled from "styled-components";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <AppWrapper>
      <Header />
      <Outlet />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.navy} 0%,
    ${({ theme }) => theme.colors.lightNavy} 44%,
    ${({ theme }) => theme.colors.skyBlue} 100%
  );
`;

export default Layout;
