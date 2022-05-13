import React from "react";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="flex items-center justify-center gap-4">
      <Link to="/" className="starbucks-btn w-[100px] py-3 text-center">
        자판기
      </Link>
      <Link to="/wallet" className="starbucks-btn w-[100px] py-3 text-center">
        지갑
      </Link>
    </nav>
  );
};

export default HeaderNav;
