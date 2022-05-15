import React, { useState } from 'react';

import vmItems from 'mocks/vmItems';

const initItems = vmItems;

export const ItemContext = React.createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState(initItems);

  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
