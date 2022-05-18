import { Flex, Border } from 'assets/style/common';
import styled from 'styled-components';

const Wallet = styled.div`
  ${Flex.centerBetween}
  ${Border.rounded}
  flex-direction: column;
  width: 518px;
  height: 740px;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
  padding: 20px;
`;

const MoneyList = styled.ul`
  ${Flex.centerAround}
  ${Border.rounded}
  flex-direction: column;
  width: 466px;
  height: 500px;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.skyBlue};
`;

export { Wallet, MoneyList };
