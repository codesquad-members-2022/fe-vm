import styled, { css } from 'styled-components';

const MessagesDiv = styled.div`
	padding: 20px;
	flex-grow: 1;
	text-align: left;
	${({ theme: { colors } }) => css`
		background-color: ${colors.yellow};
	`}
`;

const Messages = () => {
	return <MessagesDiv>MESSAGES</MessagesDiv>;
};

export default Messages;
