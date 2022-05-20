import React, { createContext, useContext, useMemo } from 'react';

interface Props {
  children: string;
}

interface IUseTimer {
  (key: string): [ISetTimer, IClearTimer];
}

interface ISetTimer {
  (callback: any, seconds: number): void;
}

interface IClearTimer {
  (): void;
}

interface ITimerState {
  [key: string]: NodeJS.Timeout;
}

const timer: ITimerState = {};

const TimerContext = createContext(timer);

export const TimerProvider = ({ children }: Props) => {
  const value = useMemo(() => timer, [timer]);

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};

export const useTimer: IUseTimer = (key) => {
  const timer = useContext(TimerContext);

  const setTimer: ISetTimer = (callback, seconds) => {
    if (Object.hasOwn(timer, key)) {
      clearTimeout(timer[key]);
    }

    timer[key] = setTimeout(callback, seconds * 1000);
  };

  const clearTimer: IClearTimer = () => {
    clearTimeout(timer[key]);
  };

  return [setTimer, clearTimer];
};
