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

const ControllerBtnsDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ControllerBtn = styled.button`
	${({
		theme: { colors, getBorder, font, distance, border },
		isTakingOut,
		color,
	}) => css`
		${getBorder('main', 'black', 'main')};
		${font.medium};
		padding: ${distance.large};
		margin: ${distance.small};
		cursor: ${!isTakingOut ? 'pointer' : 'not-allowed'};
		flex-basis: 50%;
		background-color: ${colors[color.main]};
		:hover {
			background-color: ${colors[color.sub]};
		}

		${isTakingOut &&
		css`
			div {
				margin: 0 auto;
				border: ${border.large};
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

export { InsertMoneyDiv, InsertMoneyValue, ControllerBtnsDiv, ControllerBtn };
