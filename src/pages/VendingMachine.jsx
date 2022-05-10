import { useContext } from 'react';
import styled from 'styled-components';

import VMController from 'components/VMController';
import VMItems from 'components/VMItems';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';

const VendingMachine = () => {
  const [logs, setLogs] = useContext(LogContext);
  const insertVMLog = (log) => {
    const lastLogId = logs[logs.length - 1].id;
    const newLog = { id: lastLogId + 1, ...log };
    setLogs([...logs, newLog]);
  };

  return (
    <VMLayout>
      <VMItems insertVMLog={insertVMLog} />
      <VMController insertVMLog={insertVMLog} logs={logs} />
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
