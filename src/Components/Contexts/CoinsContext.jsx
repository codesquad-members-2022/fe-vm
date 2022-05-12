import React, { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';

import coinsApi from 'Service/coinsApi';

const CoinsContext = createContext({});

const CoinsProvider = ({ inner }) => {
	const [coins, setCoins] = useState([]);

	const fetchCoins = async () => {
		const coinsData = await coinsApi.getCoins();
		setCoins(coinsData);
	};

	const contextInfo = useMemo(() => {
		const coinsSum = coins.reduce((pre, post) => {
			return pre + post.price * post.count;
		}, 0);
		return {
			coins,
			setCoins,
			coinsSum,
		};
	}, [coins]);

	useEffect(() => {
		fetchCoins();
	}, []);

	return (
		<CoinsContext.Provider value={contextInfo}>{inner}</CoinsContext.Provider>
	);
};

CoinsProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { CoinsContext, CoinsProvider };
