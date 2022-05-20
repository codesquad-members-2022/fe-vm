import React from 'react';

export const TimerContext = React.createContext();

export const TimerProvider = props => {
  let returnTimerId;

  const setReturnCashesTimer = callback => {
    console.log('타이머 시작');
    returnTimerId = setTimeout(() => {
      console.log('5초 경과 - 콜백 실행');
      callback();
    }, 5000);
  };

  const clearReturnCashesTimer = () => {
    if (!returnTimerId) return;

    console.log('타이머 해제');
    clearTimeout(returnTimerId);
  };

  return (
    <TimerContext.Provider value={{ setReturnCashesTimer, clearReturnCashesTimer }}>
      {props.children}
    </TimerContext.Provider>
  );
};
