import styled, { css } from 'styled-components';

const WalletDiv = styled.div`
	${({ theme: { colors } }) => css`
		display: flex;
		justify-content: space-around;
		font-size: 20px;
		margin: 0 auto;
		width: 50%;
		height: 100%;
		margin-top: 50px;
		padding: 20px;
		border: 2px solid ${colors.black};
		border-radius: 20px;

		> div {
			flex-basis: 40%; // devide area by 2
		}
	`}
`;

const CoinDiv = styled.div`
	display: flex;
	justify-content: center;
	:not(:last-child) {
		margin-bottom: 2px;
	}
	> div {
		width: 90px;
		height: 70px;
		line-height: 70px;
		border-radius: 20px;
		margin: 5px;
	}
`;

const CoinPriceDiv = styled.div`
	${({ theme: { colors } }) => css`
		border: 2px solid ${colors.black};
	`}
`;

const CoinCountDiv = styled.div`
	${({ theme: { colors } }) => css`
		cursor: pointer;
		border: solid 2px ${colors.green};
		color: ${colors.green};
		:hover {
			background-color: ${colors.green};
			color: ${colors.white};
		}
	`}
`;

const CoinsSumDiv = styled.div`
	${({ theme: { colors } }) => css`
		box-sizing: border-box;
		background-color: ${colors.yellow};
		border: 2px solid ${colors.black};
		border-radius: 20px;
		width: 180px;
		height: 180px;
		line-height: 180px;
		margin-top: 5px;
	`}
`;

const WalletMessagesDiv = styled.div`
	${({ theme: { colors } }) => css`
		background-color: ${colors.lightRed};
		border: 2px solid ${colors.black};
		box-sizing: border-box;
		border-radius: 20px;
		width: 180px;
		height: 180px;
		padding: 10px;
		margin-top: 20px;
		overflow: scroll;
		text-align: left;
	`}
`;

const WalletMessageDiv = styled.div`
	margin-top: 5px;
	font-size: 15px;
`;

export {
	WalletDiv,
	CoinDiv,
	CoinCountDiv,
	CoinPriceDiv,
	CoinsSumDiv,
	WalletMessagesDiv,
	WalletMessageDiv,
};
