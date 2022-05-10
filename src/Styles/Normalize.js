import { createGlobalStyle, css } from 'styled-components';

const Normalize = createGlobalStyle`
  ${({ theme: { colors } }) =>
		css`
			color: ${colors.black};
		`}
  .App {
    width: 700px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
`;

export default Normalize;
