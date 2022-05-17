import { useState } from "react";

import HeaderInfoContextStore from "../stores/headerInfoStore";

const HeaderInfoContext = (props) => {
  const [IsHeaderBtnClick, setIsHeaderBtnClick] = useState("");
  const headerInfo = {
    IsHeaderBtnClick,
    setIsHeaderBtnClick,
  };

  return (
    <HeaderInfoContextStore.Provider value={headerInfo}>
      {props.children}
    </HeaderInfoContextStore.Provider>
  );
};

export default HeaderInfoContext;
