import Navbar from "components/navigation/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <Outlet />
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  width: 60%;
  height: 100%;

  .gnb {
    text-align: center;
    margin: 1rem 0;
  }
`;

const Main = styled.main`
  height: 30rem;
`;

export default Layout;
