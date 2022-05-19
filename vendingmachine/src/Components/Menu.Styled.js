import styled from 'styled-components';
import { FlexCenter } from 'styled-components/util';

export const MenuList = styled(FlexCenter)`
  gap: 3rem;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.padding.large};
`;
