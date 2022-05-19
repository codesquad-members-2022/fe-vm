import styled from 'styled-components';
import { Container, boxShadowBorderRadi } from 'styled-components/util';

export const WalletList = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: ${({ theme }) => theme.padding.large};
`;

export const TotalMoney = styled.li`
  text-align: center;
  margin-top: ${({ theme }) => theme.margin.large};
  padding: ${({ theme }) => theme.padding.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  cursor: default;
  ${boxShadowBorderRadi}
`;
