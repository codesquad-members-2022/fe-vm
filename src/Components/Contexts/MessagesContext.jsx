import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { PLUS, MINUS, BUY } from 'Util/constant';
import { getPresentTime, getPriceType } from 'Util/util';

const reducer = (messages, action) => {
	const { type, contents } = action;
	const newMessages = [...messages];

	let keys;
	let message;

	switch (type) {
		case PLUS:
			keys = Object.keys(contents);
			keys.forEach((key) => {
				const count = contents[key];
				const totalPrice = key * count;
				message = `${getPriceType(key)}원 ${count}개 반환`;
				newMessages.push({
					message,
					id: newMessages.length,
					time: `${getPresentTime()}`,
					totalPrice,
				});
			});
			break;

		case MINUS:
			keys = Object.keys(contents);
			keys.forEach((key) => {
				const count = contents[key];
				const totalPrice = -(key * count);
				message = `${getPriceType(key)}원 ${count}개 투입`;
				newMessages.push({
					message,
					id: newMessages.length,
					time: `${getPresentTime()}`,
					totalPrice,
				});
			});
			break;

		case BUY:
			message = `${contents} 구입`;
			newMessages.push({
				message,
				id: newMessages.length,
				time: `${getPresentTime()}`,
			});
			break;

		default:
	}
	return newMessages;
};

const MessagesContext = createContext([]);
const MessagesDispatchContext = createContext();

const MessagesProvider = ({ inner }) => {
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
