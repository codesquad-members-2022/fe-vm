import React, { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';

const IsTakingOutContext = createContext({});

const IsTakingOutProvider = ({ inner }) => {
	const [isTakingOut, setIsTakingOut] = useState(false);

	const value = useMemo(() => {
		return { isTakingOut, setIsTakingOut };
	}, [isTakingOut]);

	return (
		<IsTakingOutContext.Provider value={value}>
			{inner}
		</IsTakingOutContext.Provider>
	);
};

IsTakingOutProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { IsTakingOutContext, IsTakingOutProvider };
