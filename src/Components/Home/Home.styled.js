import styled, { css } from 'styled-components';

const HomeDiv = styled.div`
	text-align: center;
`;

const NavigatorDiv = styled.div`
	overflow: auto;
	margin: 0 auto;
	> div {
		${({ theme: { colors, padding } }) => css`
			display: inline-block;
			padding: ${padding.small};
			border: solid 2px ${colors.black};
			:first-child {
				border-radius: 10px 0 0 10px;
			}
			:last-child {
				border-radius: 0 10px 10px 0;
			}
			:not(:last-child) {
				border-right: 0;
			}
		`}
	}
`;

export { HomeDiv, NavigatorDiv };
