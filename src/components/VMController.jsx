import styled from 'styled-components';

import VMInputMoney from 'components/VMInputMoney';
import VMLogs from 'components/VMLogs';
import COLORS from 'constants/colors';

const VMController = () => (
  <VMControllerWrapper>
    <VMInputMoney />
    <ReturnMoneyButton>반환</ReturnMoneyButton>
    <VMLogs />
  </VMControllerWrapper>
);

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
