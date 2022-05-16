import styled, { css } from 'styled-components';

const MessagesWrapper = styled.div``;

const MessagesDiv = styled.div`
	${({ theme: { colors, distance, height, getBorder } }) => css`
		${getBorder('main', 'black', 'main')};
		margin: ${distance.small};
		background-color: ${colors.yellow};
		height: ${height.messages};
		padding: ${distance.large};
		overflow: scroll;
		flex-grow: 1;
		text-align: left;
	`}
`;

const MessageDiv = styled.div`
	padding: 2px;
`;

export { MessagesWrapper, MessagesDiv, MessageDiv };
