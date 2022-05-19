import styled from 'styled-components';

import { itemStyle } from '@/styles/common';

const UserLogBox = styled.div`
  ${itemStyle}
  width: 340px;
  height: ${({ isStock }) => (isStock ? '500px' : '360px')};
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  background-color: ${({ theme: { greyScale } }) => greyScale.primaryGrey};
  padding: 5px;
  overflow-y: auto;
`;

const StyledLog = styled.li`
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  padding: 5px;
`;

export { UserLogBox, StyledLog };
