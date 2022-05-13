import styled from 'styled-components';

import { itemStyle } from '@/styles/common';
import FlexBox from '@/styles/FlexBox';

const VendorWrapper = styled(FlexBox)`
  width: 1100px;
  height: 600px;
  justify-content: space-between;
`;

const ProductGrid = styled.div`
  display: grid;
  width: 670px;
  height: 600px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  overflow-y: auto;
  grid-gap: 20px;
  padding: 10px;
`;

const SideWrapper = styled(FlexBox)`
  flex-direction: column;
  height: 600px;
  justify-content: space-between;
  padding: 10px 0;
`;

const ResetButton = styled.button`
  ${itemStyle}
  width: 340px;
  height: 50px;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  background-color: ${({ theme: { greyScale } }) => greyScale.primaryGrey};
  cursor: auto;
  line-height: inherit;

  :focus {
    ${itemStyle}
  }
`;

const Logger = styled.div`
  ${itemStyle}
  width: 340px;
  height: ${({ isStock }) => (isStock ? '500px' : '360px')};
  font-size: ${({ theme: { fontSize } }) => fontSize.small};
  background-color: ${({ theme: { greyScale } }) => greyScale.primaryGrey};
  padding: 15px;
  overflow-y: auto;
`;

export { VendorWrapper, ProductGrid, SideWrapper, ResetButton, Logger };
