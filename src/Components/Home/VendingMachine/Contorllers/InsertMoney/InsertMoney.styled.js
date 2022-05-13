import styled, { css } from 'styled-components';

const InsertMoneyDiv = styled.div`
	${({ theme: { colors } }) => css`
		margin: 15px;
		border-radius: 20px;
		border: 2px solid ${colors.black};
		background-color: ${colors.yellow};
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

const BtnsDiv = styled.div`
	display: flex;
	justify-content: space-between;
	> div {
		flex-basis: 50%;
	}
`;

const BtnDiv = styled.div`
	${({ theme: { colors }, isTakingOut, color }) => css`
		cursor: ${!isTakingOut ? 'pointer' : 'not-allowed'};
		height: 20px;
		margin: 15px;
		border-radius: 20px;
		border: 2px solid ${colors.black};
		background-color: ${colors[color.main]};
		padding: 20px;
		font-size: 20px;
		:hover {
			background-color: ${colors[color.sub]};
		}

		${isTakingOut &&
		css`
			div {
				margin: 0 auto;
				border: 5px solid orange;
				border-radius: 50%;
				border-color: ${colors.white} transparent transparent transparent;
				width: 15px;
				height: 15px;
				animation: spinning 1s infinite;
			}

			@keyframes spinning {
				from {
					transform: rotate(0);
				}
				to {
					transform: rotate(360deg);
				}
			}
		`}
	`}
`;

export { InsertMoneyDiv, InsertMoneyValue, BtnsDiv, BtnDiv };
