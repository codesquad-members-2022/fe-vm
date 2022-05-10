import styled from 'styled-components';

import VMLogs from 'components/VMLogs';
import COLORS from 'constants/colors';

const VMController = () => (
  <VMControllerWrapper>
    <CurrentInputMoney>500원</CurrentInputMoney>
    <ReturnMoneyButton>반환</ReturnMoneyButton>
    <VMLogs />
  </VMControllerWrapper>
);

const VMControllerWrapper = styled.ul`
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

export default VMController;
