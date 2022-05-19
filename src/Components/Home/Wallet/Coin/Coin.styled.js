import styled, { css } from 'styled-components';

const CoinDiv = styled.div`
	display: flex;
	justify-content: center;
	:not(:last-child) {
		margin-bottom: 2px;
	}
`;

const CoinPriceDiv = styled.div`
	${({ theme: { width, height, getBorder, font } }) => css`
		${getBorder('main', 'black', 'main')};
		${font.medium};
		width: ${width.coin};
		height: ${height.coin};
		line-height: ${height.coin};
		box-sizing: border-box;
		margin: 5px;
	`}
`;

const CoinCountBtn = styled.button`
	${({
		theme: { width, height, font, getStyledButtonColor, border },
		count,
	}) => css`
		${getStyledButtonColor(count ? 'green' : 'red', 'main', true, true)};
		${font.medium};
		border-radius: ${border.radius.main};
		cursor: ${count ? 'pointer' : 'not-allowed'};
		width: ${width.coin};
		height: ${height.coin};
		padding-top: 3px;
		margin: 5px;
	`}
`;

export { CoinDiv, CoinCountBtn, CoinPriceDiv };
