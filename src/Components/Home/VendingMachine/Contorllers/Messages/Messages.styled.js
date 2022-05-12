import styled, { css } from 'styled-components';

const MessagesWrapper = styled.div``;

const MessagesDiv = styled.div`
	height: 80px;
	overflow: scroll;
	padding: 20px;
	flex-grow: 1;
	text-align: left;
	${({ theme: { colors } }) => css`
		background-color: ${colors.yellow};
	`}
`;

const MessageDiv = styled.div`
	padding: 2px;
`;

export { MessagesWrapper, MessagesDiv, MessageDiv };
