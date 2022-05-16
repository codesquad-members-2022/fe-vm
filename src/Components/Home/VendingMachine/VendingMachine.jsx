import styled, { css } from 'styled-components';
import Items from './Items/Items';
import Controllers from './Contorllers/Controllers';

const VendingMachineDiv = styled.div`
	${({ theme: { width, height } }) => css`
		width: ${width.vm};
		height: ${height.vm};
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 40px;
	`}
`;

const VendingMachine = () => {
	return (
		<VendingMachineDiv>
			<Items />
			<Controllers />
		</VendingMachineDiv>
	);
};

export default VendingMachine;
