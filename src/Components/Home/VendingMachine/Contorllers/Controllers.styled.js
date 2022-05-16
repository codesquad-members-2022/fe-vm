import styled, { css } from 'styled-components';

const ControllersDiv = styled.div`
	width: 50%;
	padding: 10px;
	margin: 10px;
	width: 400px;
	display: flex;
	flex-direction: column;
	height: 100%;

	${({ theme: { colors } }) => css`
		border: 2px solid ${colors.black};
		border-radius: 20px;
	`}
`;

export default ControllersDiv;
