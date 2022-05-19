import styled, { css } from 'styled-components';

const InsertMoneyDiv = styled.div`
	${({ theme: { colors, getBorder, distance, font } }) => css`
		${getBorder('main', 'black', 'main')};
		${font.medium};
		margin: ${distance.small};
		background-color: ${colors.yellow};
		padding: ${distance.large};
		display: flex;
		align-items: center;
	`}
`;

const InsertMoneyValue = styled.input`
	${({ theme: { colors, font } }) => css`
		${font.medium};
		background-color: ${colors.yellow};
		width: 90%;
		text-align: right;
		outline: none;
		border: none;
	`}
`;

export { InsertMoneyDiv, InsertMoneyValue };
