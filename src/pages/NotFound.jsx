import React from "react";
import { useNavigate } from "react-router-dom";
import NYANCAT_GIF from "assets/nyancat+adventuretime.gif";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="px-4 py-1 text-4xl font-medium rounded-xl starbucks">Not Found Page</h1>
      <img src={NYANCAT_GIF} alt="nyancat_gif" />
      <button
        onClick={() => navigate(-1)}
        className="btn btn--starbucks border-2 px-3 py-1 text-[22px] font-medium"
      >
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
