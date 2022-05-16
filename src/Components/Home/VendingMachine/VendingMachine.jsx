import styled from 'styled-components';
import Items from './Items/Items';
import Controllers from './Contorllers/Controllers';

const VendingMachineDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 auto;
	margin-top: 40px;
	width: 900px;
	height: 710px;
	border-radius: 20px;
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
