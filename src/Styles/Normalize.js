import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
  ${({ theme: { colors, width, distance, font } }) =>
		css`
			.App {
				color: ${colors.black};
				width: ${width.app};
				margin: 0 auto;
				padding: ${distance.large};
				${font.main};
			}

			button {
				line-height: 110%;
				color: ${colors.black};
				${font.main};
				${font.small};
			}
		`}

`;

export default Normalize;
