import styled, { css } from 'styled-components';
import Items from './Items/Items';
import Controllers from './Contorllers/Controllers';

const VendingMachineDiv = styled.div`
	${({ theme: colors }) => css`
		display: flex;
		justify-content: space-between;
		background-color: ${colors.yellow};
		margin: 0 auto;
		margin-top: 40px;
		width: 800px;
		border-radius: 10px;
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
