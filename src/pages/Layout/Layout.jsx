import Navbar from "components/Navbar/NavBar";
import DelayProvider from "contexts/delayContext";
import MoneyProvider from "contexts/moneyContext";
import ProgressProvider from "contexts/progressContext";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <DelayProvider>
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
      </DelayProvider>
    </Wrap>
  );
};

export default Layout;
