import styled from 'styled-components';

import VMItem from 'components/VMItem';
import COLORS from 'constants/colors';
import vmItems from 'mocks/vmItems';

const VendingMachine = () => (
  <VMLayout>
    <VMItems>
      {vmItems.map((item) => (
        <VMItem key={item.id} item={item} />
      ))}
    </VMItems>
    <VMController>
      <CurrentInputMoney>500 원</CurrentInputMoney>
      <ReturnMoneyButton>반환</ReturnMoneyButton>
      <VendingMachineLogs>
        <VendingMachineLog>500원이 투입됐음.</VendingMachineLog>
        <VendingMachineLog>500원이 투입됐음.</VendingMachineLog>
        <VendingMachineLog>콜라가 선택됨</VendingMachineLog>
        <VendingMachineLog>잔돈 500원 반환</VendingMachineLog>
      </VendingMachineLogs>
    </VMController>
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

const VMItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

const VMController = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  grid-gap: 10px;
  padding: 10px;
  border: 3px solid ${COLORS.DARK_GREY};
`;

const CurrentInputMoney = styled.div`
  border: 3px solid ${COLORS.GREY};
  padding: 10px;
`;
const ReturnMoneyButton = styled.div`
  border: 3px solid ${COLORS.GREY};
  padding: 10px;
`;
const VendingMachineLogs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 3px solid ${COLORS.GREY};
`;
const VendingMachineLog = styled.span``;

export default VendingMachine;
