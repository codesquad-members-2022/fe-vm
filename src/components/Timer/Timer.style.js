import styled from 'styled-components';

import { itemStyle } from '@/styles/common';
import FlexBox from '@/styles/FlexBox';

const TimerBox = styled(FlexBox)`
  ${itemStyle}
  justify-content: space-between;
  background-color: ${({ theme: { color, greyScale }, isInsertedCash }) =>
    isInsertedCash ? color.orange : greyScale.primaryGrey};
  width: 140px;
  height: 50px;
  padding: 10px;
  position: absolute;
  top: -65px;
  left: 0;
  transition: all 400ms ease;
`;

const TimerCount = styled.p`
  color: ${({ theme: { greyScale } }) => greyScale.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  margin: auto;
`;

export { TimerBox, TimerCount };
