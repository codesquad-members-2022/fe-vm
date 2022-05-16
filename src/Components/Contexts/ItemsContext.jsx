import React, { useState, useMemo, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import itemsApi from 'Service/itemsApi';

const ItemsContext = createContext({});

const ItemsProvider = ({ inner }) => {
	const [items, setItems] = useState(true);

	const fetchItems = async () => {
		const itemsData = await itemsApi.getItems();
		setItems(itemsData);
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const value = useMemo(() => {
		return { items, setItems };
	}, [items]);

	return <ItemsContext.Provider value={value}>{inner}</ItemsContext.Provider>;
};

ItemsProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { ItemsContext, ItemsProvider };
