import HeaderNav from "components/Nav/HeaderNav";
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="my-10 mx-auto max-w-3xl">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default App;
