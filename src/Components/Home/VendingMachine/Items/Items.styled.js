import styled, { css } from 'styled-components';

const ItemsWrapper = styled.div`
	position: relative;
	flex-basis: 50%;
`;

const ItemsDiv = styled.div`
	${({ theme: { distance, width, getBorder } }) => css`
		padding: ${distance.small};
		margin: ${distance.small};
		width: ${width['vm-child']};
		${getBorder('main', 'black', 'main')}
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		flex: 1 1 0;
		height: 100%;
		overflow: scroll;
	`}
`;

const ItemDiv = styled.button`
	flex-basis: 40%;
	font-size: 18px;
	line-height: 110%;

	${({
		theme: { distance, getStyledButtonColor, border },
		empty,
		isSelectable,
		count,
	}) =>
		css`
			margin: ${distance.small};
			padding: ${distance.small};

			${!empty &&
			css`
				border-radius: ${border.radius.main};
				${getStyledButtonColor('black', 'main', false, true)}
			`}

			${isSelectable &&
			css`
				cursor: pointer;
				border-radius: ${border.radius.main};
				${getStyledButtonColor('green', 'main', true, true)}
			`}
	
			${count === 0 &&
			css`
				cursor: not-allowed;
				border-radius: ${border.radius.main};
				${getStyledButtonColor('red', 'main', true, true)}
			`}
		`}
`;

const ItemNameDiv = styled.div`
	margin: 2px;
`;

const ItmePriceDiv = styled.div`
	padding: 2px;
`;

const ItemWrapper = styled.div``;

const TakingOutDiv = styled.div`
	${({ theme: { colors, width, getBorder, font, distance } }) => css`
		${getBorder('main', 'black', 'main')};
		${font.large};
		background-color: ${colors.black};
		width: ${width['vm-child']};
		color: ${colors.yellow};
		padding: ${distance.small};
		margin: ${distance.small};
		position: absolute;
		height: 100%;
		opacity: 70%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	`}

	${({ isTakingOut }) =>
		!isTakingOut &&
		css`
			display: none;
		`}
`;

const Loading = styled.div`
	${({ theme: { colors, border } }) => css`
		position: relative;
		margin-top: 20px;

		div {
			margin: 0 auto;
			border: ${border.xLarge};
			border-radius: 50%;
			border-color: ${colors.yellow} transparent transparent transparent;
			width: 50px;
			height: 50px;
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
`;

export {
	ItemsWrapper,
	ItemsDiv,
	ItemDiv,
	ItemNameDiv,
	ItmePriceDiv,
	ItemWrapper,
	TakingOutDiv,
	Loading,
};
