import { useCallback, useEffect } from 'react';

const useDebounce = (func, delay, deps) => {
	const callback = useCallback(func, [func, deps]);

	useEffect(() => {
		const timer = setTimeout(() => {
			callback();
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [callback, delay]);
};

export default useDebounce;
