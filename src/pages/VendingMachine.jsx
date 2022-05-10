import styled from 'styled-components';

import VMController from 'components/VMController';
import VMItems from 'components/VMItems';
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
  width: 700px;
  height: 500px;
  padding: 30px;
  background-color: ${COLORS.WHITE};
  border: 0.5rem solid ${COLORS.DARK_GREY};
`;

export default VendingMachine;
