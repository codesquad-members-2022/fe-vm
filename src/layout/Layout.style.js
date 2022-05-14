import styled from 'styled-components';

import FlexBox from '@/styles/FlexBox';

const OuterContainer = styled(FlexBox)`
  width: 1440px;
  height: 850px;
  margin: auto;
  background-color: ${({ theme: { greyScale } }) => greyScale.white};
`;

const InnerContainer = styled(FlexBox)`
  width: 1200px;
  height: 700px;
  margin: auto;
  border-radius: 10px;
  background-color: ${({ theme: { greyScale } }) => greyScale.innerBackground};
  position: relative;
`;

export { OuterContainer, InnerContainer };
