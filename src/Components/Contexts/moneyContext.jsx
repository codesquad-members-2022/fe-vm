import React, { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';

const MoneyContext = createContext({});
const ShowedMoneyContext = createContext({});

const MoneyProvider = ({ inner }) => {
	const [money, setMoney] = useState(0);
	const [showedMoney, setShowedMoney] = useState(0);
	const setMoneyStates = (price) => {
		setMoney(price);
		setShowedMoney(price);
	};

	const moneyValue = useMemo(() => {
		return { money, setMoneyStates };
	}, [money]);

	const showedMoneyValue = useMemo(() => {
		return { showedMoney, setShowedMoney };
	}, [showedMoney]);

	return (
		<MoneyContext.Provider value={moneyValue}>
			<ShowedMoneyContext.Provider value={showedMoneyValue}>
				{inner}
			</ShowedMoneyContext.Provider>
		</MoneyContext.Provider>
	);
};

MoneyProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { MoneyContext, MoneyProvider, ShowedMoneyContext };
