import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBtn from "./NavBtn";

function Layout() {
  return (
    <div>
      <NavBtn />
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
