import styled, { css } from 'styled-components';

const InsertMoneyDiv = styled.div`
	padding: 20px;
	font-size: 20px;
	display: flex;
	align-items: center;
`;

const InsertMoneyValue = styled.input`
	width: 90%;
	text-align: right;
	outline: none;
	border: none;
	font-size: 20px;
	${({ theme: { colors } }) => css`
		background-color: ${colors.yellow};
	`}
`;

const WithdrawDiv = styled.div`
	cursor: pointer;
	padding: 20px;
	font-size: 20px;
	border: none;
	background-color: yellow;
`;

export { InsertMoneyDiv, InsertMoneyValue, WithdrawDiv };
