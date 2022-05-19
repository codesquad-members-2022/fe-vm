import React from 'react';

interface IThrottle {
  (callback: any, delay: number): (event: React.SyntheticEvent) => void;
}

export const throttle: IThrottle = (callback, delay) => {
  let timer: NodeJS.Timeout | null;

  return (event) => {
    if (timer) return;
    timer = setTimeout(() => {
      callback(event);
      timer = null;
    }, delay);
  };
};
