import { useContext } from 'react';
import styled from 'styled-components';

import VMController from 'components/VendingMachine/VMController';
import VMItems from 'components/VendingMachine/VMItems';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';

const VendingMachine = () => {
  const [logs] = useContext(LogContext);

  return (
    <VMLayout>
      <VMItems />
      <VMController logs={logs} />
    </VMLayout>
  );
};

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
