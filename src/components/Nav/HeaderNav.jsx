import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const path = useLocation().pathname;

  const styledFocusing = (url) => {
    return url === path && "bg-starbucks text-white";
  };

  return (
    <nav className="flex gap-4 justify-center items-center my-10 text-xl">
      <Link to="/" className={`${styledFocusing("/")} headerTab--starbucks`}>
        자판기
      </Link>
      <Link to="/wallet" className={`${styledFocusing("/wallet")} headerTab--starbucks`}>
        지갑
      </Link>
    </nav>
  );
};

export default HeaderNav;
