import { useCallback, useState } from 'react';

const useLoading = (handler) => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleHandler = useCallback(async (...args) => {
    setIsLoading(true);
    await handler(...args);
    setIsLoading(false);
  }, []);

  return { isLoading, toggleHandler };
};

export default useLoading;
