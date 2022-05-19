import styled from 'styled-components';
import { Container } from 'styled-components/util';

export const VendingMachineContainer = styled(Container)`
  width: 1440px;
  display: flex;
  margin-top: ${({ theme }) => theme.margin.large};
`;
