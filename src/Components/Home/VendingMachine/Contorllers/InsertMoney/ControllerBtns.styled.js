import styled, { css } from 'styled-components';

const ControllerBtnsDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ControllerBtn = styled.button`
	${({
		theme: { colors, getBorder, font, distance, border },
		isTakingOut,
	}) => css`
		${getBorder('main', 'black', 'main')};
		${font.medium};
		padding: ${distance.large};
		margin: ${distance.small};
		cursor: ${!isTakingOut ? 'pointer' : 'not-allowed'};
		flex-basis: 50%;

		:first-child {
			background-color: ${colors.lightGreen};
			:hover {
				background-color: ${colors.green};
			}
		}

		:last-child {
			background-color: ${colors.lightRed};
			:hover {
				background-color: ${colors.red};
			}
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

export { ControllerBtnsDiv, ControllerBtn };
