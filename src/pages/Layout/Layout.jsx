import Navbar from "components/Navbar/NavBar";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

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

export default Layout;
