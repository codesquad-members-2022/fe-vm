import { useState } from "react";

import HeaderInfoContextStore from "../stores/headerInfoStore";

const HeaderInfoContext = (props) => {
  const [headerBtnDisplay, setHeaderBtnDisplay] = useState(true);
  const headerInfo = {
    headerBtnDisplay,
    setHeaderBtnDisplay,
  };

  return <HeaderInfoContextStore.Provider value={headerInfo}>{props.children}</HeaderInfoContextStore.Provider>;
};

export default HeaderInfoContext;
