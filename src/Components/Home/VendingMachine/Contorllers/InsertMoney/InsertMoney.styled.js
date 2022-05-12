import styled, { css } from 'styled-components';

const InsertMoneyDiv = styled.div`
	${({ theme: { colors }, isTakingOut }) => css`
		color: ${isTakingOut && colors.white};
	`}
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
	${({ theme: { colors }, isTakingOut }) => css`
		cursor: ${!isTakingOut ? 'pointer' : 'not-allowed'};
		padding: 20px;
		font-size: 20px;
		color: ${isTakingOut && colors.white};
	`}
`;

export { InsertMoneyDiv, InsertMoneyValue, WithdrawDiv };
