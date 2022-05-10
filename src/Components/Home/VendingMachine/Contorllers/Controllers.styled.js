import styled, { css } from 'styled-components';

const ControllersDiv = styled.div`
	padding: 10px;
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	> div {
		${({ theme: { colors } }) => css`
			margin: 15px;
			border-radius: 10px;
			border: 2px solid ${colors.black};
		`}
	}
`;

export default ControllersDiv;
