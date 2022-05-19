import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
  ${({ theme: { colors, width, distance, font, transition } }) =>
		css`
			.App {
				${font.main};
				color: ${colors.black};
				width: ${width.app};
				padding: ${distance.large};
				margin: 0 auto;
			}

			button {
				${font.main};
				${transition.main};
				color: ${colors.black};
				line-height: 110%;
			}
		`}

`;

export default Normalize;
