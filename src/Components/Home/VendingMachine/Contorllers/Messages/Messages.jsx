import { useContext } from 'react';
import { MessagesContext } from 'Components/Contexts';
import { MessagesDiv, MessageDiv } from './Messages.styled';

const Messages = () => {
	const messages = useContext(MessagesContext);
	const messagesList = messages.map(({ message, id, time }) => {
		const content = `[${time}] ${message}`;
		return <MessageDiv key={id}>{content}</MessageDiv>;
	});

	return <MessagesDiv>{messagesList}</MessagesDiv>;
};

export default Messages;
