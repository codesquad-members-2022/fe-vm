import Navbar from "components/Navbar/NavBar";
import MoneyProvider from "contexts/moneyContext";
import ProgressProvider from "contexts/progressContext";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <MoneyProvider>
          <ProgressProvider>
            <Outlet />
          </ProgressProvider>
        </MoneyProvider>
      </Main>
    </Wrap>
  );
};

export default Layout;
