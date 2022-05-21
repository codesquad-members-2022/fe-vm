import { useCallback, useEffect, useRef } from 'react';

const useSetTimeout = ({ delay, tigger, triggerCondition, callback }) => {
  const timeId = useRef(null);
  const refCallback = useRef(callback);

  const startTimeTriggerEvent = useCallback(() => {
    if (triggerCondition && refCallback.current) {
      timeId.current = setTimeout(() => {
        refCallback.current();
      }, delay);
    }
  }, [delay, triggerCondition]);

  const clearTimeTiggerEvent = useCallback(() => clearTimeout(timeId.current), []);

  useEffect(() => {
    refCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return () => clearTimeTiggerEvent();
    }
    startTimeTriggerEvent();
    return () => clearTimeTiggerEvent();
  }, [tigger.join('')]);
};

export default useSetTimeout;
