import { useContext } from 'react';
import styled from 'styled-components';

import VMInputMoney from 'components/VendingMachine/VMInputMoney';
import VMLogs from 'components/VendingMachine/VMLogs';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';

const VMController = () => {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const [, insertLog] = useContext(LogContext);

  const handleClickReturnButton = () => {
    setInputMoney(0);
    insertLog({
      type: 'return',
      data: inputMoney,
    });
  };

  return (
    <VMControllerWrapper>
      <VMInputMoney />
      <ReturnMoneyButton onClick={handleClickReturnButton}>
        반환
      </ReturnMoneyButton>
      <VMLogs />
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

const ReturnMoneyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${COLORS.GREY};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${COLORS.MAIN_BG};
  }
`;

export default VMController;