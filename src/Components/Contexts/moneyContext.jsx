import React, { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';

const MoneyContext = createContext({});

const MoneyProvider = ({ inner }) => {
	const [money, setMoney] = useState(0);
	const [showedMoney, setShowedMoney] = useState(0);

	const value = useMemo(() => {
		return { money, setMoney, showedMoney, setShowedMoney };
	}, [money, showedMoney]);

	return <MoneyContext.Provider value={value}>{inner}</MoneyContext.Provider>;
};

MoneyProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { MoneyContext, MoneyProvider };
