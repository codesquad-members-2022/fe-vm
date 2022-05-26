import { menuDB } from "menuDB";
import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export default function MenuStore(props) {
  const [menu, setMenu] = useState(menuDB);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
}
