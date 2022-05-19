import { useState } from "react";

import HeaderInfoContextStore from "../stores/headerInfoStore";

const HeaderInfoContext = ({ children }) => {
  const [IsHeaderBtnClick, setIsHeaderBtnClick] = useState("");
  const headerInfo = {
    IsHeaderBtnClick,
    setIsHeaderBtnClick,
  };

  return (
    <HeaderInfoContextStore.Provider value={headerInfo}>{children}</HeaderInfoContextStore.Provider>
  );
};

export default HeaderInfoContext;
