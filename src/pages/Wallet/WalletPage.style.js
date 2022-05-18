import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const WalletPage = styled.div`
  ${Flex.center}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

const WalletPageWrapper = styled.div`
  ${Flex.centerBetween}
  width: 850px;
  background-color: ${({ theme: { colors } }) => colors.lightBlue};
`;

export { WalletPage, WalletPageWrapper };
