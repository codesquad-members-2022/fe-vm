import styled from 'styled-components';
import { FlexCenter } from 'styled-components/util';

export const Container = styled(FlexCenter)`
  margin-top: ${({ theme }) => theme.margin.medium};
`;
