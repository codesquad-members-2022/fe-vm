import styled from 'styled-components';

import VMController from 'components/VendingMachine/VMController';
import VMItems from 'components/VendingMachine/VMItems';
import COLORS from 'constants/colors';

const VendingMachine = () => (
  <VMLayout>
    <VMItems />
    <VMController />
  </VMLayout>
);

const VMLayout = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  width: 52rem;
  height: 40rem;
  padding: 2rem;
  background-color: ${COLORS.WHITE};
  border: 0.5rem solid ${COLORS.DARK_GREY};
`;

export default VendingMachine;
