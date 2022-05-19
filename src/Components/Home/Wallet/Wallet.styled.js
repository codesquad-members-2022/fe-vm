import styled, { css } from 'styled-components';

const WalletDiv = styled.div`
	${({ theme: { font, width, distance, getBorder } }) => css`
		${font.medium};
		${getBorder('main', 'black', 'main')};
		display: flex;
		justify-content: space-around;
		margin: 0 auto;
		width: ${width.wallet};
		height: 100%;
		margin-top: ${distance.xLarge};
		padding: ${distance.large};

		> div {
			flex-basis: 40%; // devide area by 2
		}
	`}
`;

const CoinsSumDiv = styled.div`
	${({ theme: { colors, getBorder, width } }) => css`
		${getBorder('main', 'black', 'main')};
		background-color: ${colors.yellow};
		width: ${width['wallet-child']};
		height: ${width['wallet-child']};
		line-height: ${width['wallet-child']};
		box-sizing: border-box;
		margin-top: 5px;
	`}
`;

const WalletMessagesDiv = styled.div`
	${({ theme: { colors, width, getBorder, font, distance } }) => css`
		${getBorder('main', 'black', 'main')};
		${font.xSmall};
		background-color: ${colors.lightRed};
		width: ${width['wallet-child']};
		height: ${width['wallet-child']};
		padding: ${distance.small};
		margin-top: ${distance.large};
		box-sizing: border-box;
		overflow: scroll;
		text-align: left;
	`}
`;

const WalletMessageDiv = styled.div`
	margin-top: 5px;
`;

export { WalletDiv, CoinsSumDiv, WalletMessagesDiv, WalletMessageDiv };
