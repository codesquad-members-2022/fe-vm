import styled, { css } from 'styled-components';

const HomeDiv = styled.div`
	text-align: center;
`;

const NavigatorDiv = styled.div`
	${({ theme: { distance, getBorder, width } }) => css`
		${getBorder('main', 'black', 'main')}
		width: ${width.navigator};
		padding: ${distance.small};
		overflow: auto;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
	`};
`;

const NavigatorListDiv = styled.div`
	${({ theme: { getStyledButtonColor, distance, border } }) => css`
		${getStyledButtonColor('black', 'main', true, true)};
		padding: ${distance.small};
		border-radius: ${border.radius.small};
		cursor: pointer;
		display: inline-block;
	`};

	${({ theme: { getStyledButtonColor }, pathname, to }) =>
		pathname === to &&
		css`
			${getStyledButtonColor('green', 'main', true, true)}
		`}
`;

export { HomeDiv, NavigatorDiv, NavigatorListDiv };
