import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const path = useLocation().pathname;

  const styledFocusing = (url) => {
    return url === path && "bg-starbucks text-white";
  };

  return (
    <nav className="flex items-center justify-center gap-4 my-10 text-xl">
      <Link to="/" className={`${styledFocusing("/")} btn btn--starbucks w-[100px] py-2`}>
        자판기
      </Link>
      <Link
        to="/wallet"
        className={`${styledFocusing("/wallet")} btn btn--starbucks w-[100px] py-2`}
      >
        지갑
      </Link>
    </nav>
  );
};

export default HeaderNav;
