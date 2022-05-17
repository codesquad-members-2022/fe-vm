import HeaderNav from "components/Nav/HeaderNav";
import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-3xl mx-auto my-10">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default App;
