import styled, { css } from 'styled-components';

const ControllersDiv = styled.div`
	${({ theme: { width, distance, getBorder } }) => css`
		${getBorder('main', 'black', 'main')};
		width: ${width['vm-child']};
		padding: ${distance.small};
		margin: ${distance.small};
		display: flex;
		flex-direction: column;
		height: 100%;
	`}
`;

export default ControllersDiv;
