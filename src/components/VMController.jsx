import { useContext, useState } from 'react';
import styled from 'styled-components';

import VMInputMoney from 'components/VMInputMoney';
import VMLogs from 'components/VMLogs';
import COLORS from 'constants/colors';
import { MoneyContext } from 'context/MoneyProvider';
import vmLogs from 'mocks/vmLogs';

const initLogs = vmLogs;

const VMController = () => {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const [logs, setLogs] = useState(initLogs);

  const insertVMLog = (log) => {
    setLogs([...logs, log]);
  };

  const handleClickReturnButton = () => {
    setInputMoney(0);
    insertVMLog({
      type: 'return',
      data: inputMoney,
    });
  };

  return (
    <VMControllerWrapper>
      <VMInputMoney insertVMLog={insertVMLog} />
      <ReturnMoneyButton
        onClick={handleClickReturnButton}
        insertVMLog={insertVMLog}
      >
        반환
      </ReturnMoneyButton>
      <VMLogs logs={logs} />
    </VMControllerWrapper>
  );
};

const VMControllerWrapper = styled.ul`
  display: grid;
  grid-template-rows: 1fr 1fr 7fr;
  grid-gap: 10px;
  padding: 10px;
  border: 3px solid ${COLORS.DARK_GREY};
`;

const ReturnMoneyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${COLORS.GREY};
`;

export default VMController;
