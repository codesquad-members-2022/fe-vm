import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const VMPage = styled.div`
  ${Flex.center}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

const VMPageWrapper = styled.div`
  ${Flex.centerBetween}
  width: 960px;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export { VMPage, VMPageWrapper };
