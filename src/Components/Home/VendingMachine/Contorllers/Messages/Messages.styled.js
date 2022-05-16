import styled, { css } from 'styled-components';

const MessagesWrapper = styled.div``;

const MessagesDiv = styled.div`
	${({ theme: { colors } }) => css`
		margin: 15px;
		border-radius: 20px;
		border: 2px solid ${colors.black};
		background-color: ${colors.yellow};
	`}

	height: 80px;
	overflow: scroll;
	padding: 20px;
	flex-grow: 1;
	text-align: left;
`;

const MessageDiv = styled.div`
	padding: 2px;
`;

export { MessagesWrapper, MessagesDiv, MessageDiv };
