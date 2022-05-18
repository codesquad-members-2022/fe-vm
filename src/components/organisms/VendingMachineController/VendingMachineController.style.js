import { Flex, Border, DragDisable } from 'assets/style/common';
import styled from 'styled-components';

const VMController = styled.div`
  width: 310px;
  height: 740px;
  ${Flex.centerBetween}
  flex-direction: column;
`;

const ControllerWrapper = styled.div`
  width: 310px;
  height: 660px;
  ${Border.rounded}
  ${Flex.centerBetween}
${DragDisable}
flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
  padding: 20px;
`;

export { VMController, ControllerWrapper };
