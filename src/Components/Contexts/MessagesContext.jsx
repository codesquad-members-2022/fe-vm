import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { getPresentTime, getPriceType } from 'Util/util';

const MessagesContext = createContext([]);
const MessagesDispatchContext = createContext();

const MessagesProvider = ({ inner }) => {
	const reducer = (state, action) => {
		const { type, contents } = action;
		const newState = [...state];
		let keys;
		let message;

		switch (type) {
			case 'PLUS':
				keys = Object.keys(contents);
				keys.forEach((key) => {
					message = `${getPriceType(key)}원 ${contents[key]}개 반환`;
					newState.push({
						message,
						id: newState.length,
						time: `${getPresentTime()}`,
					});
				});
				break;

			case 'MINUS':
				keys = Object.keys(contents);
				keys.forEach((key) => {
					message = `${getPriceType(key)}원 ${contents[key]}개 투입`;
					newState.push({
						message,
						id: newState.length,
						time: `${getPresentTime()}`,
					});
				});
				break;

			case 'BUY':
				message = `${contents} 구입`;
				newState.push({
					message,
					id: newState.length,
					time: `${getPresentTime()}`,
				});
				break;

			default:
		}
		return newState;
	};

	const [messages, messagesDispatch] = useReducer(reducer, []);

	return (
		<MessagesDispatchContext.Provider value={messagesDispatch}>
			<MessagesContext.Provider value={messages}>
				{inner}
			</MessagesContext.Provider>
		</MessagesDispatchContext.Provider>
	);
};

MessagesProvider.propTypes = {
	inner: PropTypes.node.isRequired,
};

export { MessagesContext, MessagesDispatchContext, MessagesProvider };
