import styled from 'styled-components';
import { Border, Flex } from 'assets/style/common';

const UserInputBox = styled.div`
  ${Flex.center}
  flex-direction: column;
  width: 272px;
  height: 125px;
  ${Border.rounded}
  background: ${({ theme: { colors } }) => colors.white};
`;

export { UserInputBox };
