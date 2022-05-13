import styled, { css } from 'styled-components';

const HomeDiv = styled.div`
	text-align: center;
`;

const NavigatorDiv = styled.div`
	${({ theme: { colors, distance } }) => css`
		overflow: auto;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		border-radius: 20px;
		padding: ${distance.small};
		border: solid 2px ${colors.black};
		width: 200px;
	`};
`;

const NavigatorListDiv = styled.div`
	${({ theme: { colors, distance } }) => css`
		cursor: pointer;
		border-radius: ${distance.small};
		padding: ${distance.small};
		display: inline-block;
		border: 2px solid white;

		:hover {
			border: 2px solid ${colors.black};
			background-color: ${colors.black};
			color: ${colors.white};
		}
	`};

	${({ theme: { colors }, pathname, to }) =>
		pathname === to &&
		css`
			:hover {
				border: 2px solid ${colors.green};
				background-color: ${colors.green};
				color: ${colors.white};
			}
			border: 2px solid ${colors.green};
			color: ${colors.green};
		`}
`;

export { HomeDiv, NavigatorDiv, NavigatorListDiv };
