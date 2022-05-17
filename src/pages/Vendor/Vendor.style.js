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

const ReturnBtn = styled.button`
  ${itemStyle}
  width: 340px;
  height: 50px;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  background-color: ${({ theme: { greyScale, color }, inputState }) =>
    inputState === 'active' ? color.orange : greyScale.primaryGrey};
  cursor: auto;
  line-height: inherit;
  transition: all 400ms ease;
  color: ${({ theme: { greyScale }, inputState }) =>
    inputState === 'active' ? greyScale.white : greyScale.black};
  cursor: ${({ inputState }) => (inputState === 'active' ? 'pointer' : 'auto')};

  :focus {
    ${itemStyle}
  }

  :active {
    box-shadow: none;
  }
`;

export { VendorWrapper, ProductGrid, SideWrapper, ReturnBtn };
