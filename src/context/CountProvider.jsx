import React, { useContext, useEffect, useState } from 'react';

import { delay } from 'common/utils';

import { MoneyContext } from './MoneyProvider';

export const CountContext = React.createContext();

let globalLastCountTime = '';

const setGlobalLastCountTime = (lastCountTime) => {
  globalLastCountTime = lastCountTime;
};

export const CountProvider = (props) => {
  const [lastCountTime, setLastCountTime] = useState('');
  const { returnInputMoney } = useContext(MoneyContext);

  setGlobalLastCountTime(lastCountTime);
  useEffect(() => {
    if (lastCountTime !== '') {
      const resetLastCountTime = async () => {
        await delay(5000);
        if (lastCountTime === globalLastCountTime) {
          returnInputMoney();
        }
      };
      resetLastCountTime();
    }
  }, [lastCountTime]);

  return (
    <CountContext.Provider value={[lastCountTime, setLastCountTime]}>
      {props.children}
    </CountContext.Provider>
  );
};
