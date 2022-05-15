import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const path = useLocation().pathname;

  const styledFocusing = (url) => {
    return url === path && "bg-starbucks text-white";
  };
  return (
    <nav className="flex items-center justify-center gap-4 my-10 text-xl">
      <Link to="/" className={`${styledFocusing("/")} tab--starbucks`}>
        자판기
      </Link>
      <Link to="/wallet" className={`${styledFocusing("/wallet")} tab--starbucks`}>
        지갑
      </Link>
    </nav>
  );
};

export default HeaderNav;
