import { Outlet } from "react-router-dom";
import NavBtn from "../component/NavBtn";

function Layout() {
  return (
    <>
      <NavBtn />
      <Outlet />
    </>
  );
}

export default Layout;
