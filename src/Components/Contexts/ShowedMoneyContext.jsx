import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ShowedMoneyContext = createContext({});

const ShowedMoneyProvider = ({ inner }) => {
	const [showedMoney, setShowedMoney] = useState(0);

	const value = useMemo(() => {
		return { showedMoney, setShowedMoney };
	}, [showedMoney, setShowedMoney]);

	return (
		<ShowedMoneyContext.Provider value={value}>
			{inner}
		</ShowedMoneyContext.Provider>
	);
};

ShowedMoneyProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { ShowedMoneyContext, ShowedMoneyProvider };
