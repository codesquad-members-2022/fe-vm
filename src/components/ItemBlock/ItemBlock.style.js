import styled from 'styled-components';

import { itemStyle } from '@/styles/common';
import FlexBox from '@/styles/FlexBox';
import { theme } from '@/styles/theme';

const BlockBackground = styled(FlexBox)`
  ${itemStyle}
  width: 130px;
  height: 130px;
  justify-content: space-around;
  flex-direction: column;
  background-color: ${({ theme: { greyScale } }) => greyScale.primaryGrey};
  padding: 10px;
  user-select: none;
  cursor: pointer;
`;

const getCategoryColor = categoryId => {
  switch (categoryId) {
    case 1:
      return theme.color.green;
    case 2:
      return theme.color.purple;
    case 3:
      return theme.color.pink;
    case 'money':
      return theme.color.blue;
  }
};

const InnerColor = styled(FlexBox)`
  width: 110px;
  height: 70px;
  font-size: ${({ theme: { fontSize }, isMoney }) => (isMoney ? fontSize.xLarge : fontSize.medium)};
  background-color: ${({ theme: { greyScale }, categoryId }) =>
    categoryId ? getCategoryColor(categoryId) : greyScale.soldOut};
  border-radius: 10px;
  color: ${({ theme: { greyScale } }) => greyScale.white};
  padding: 5px;
  text-align: center;
`;

const InnerText = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.medium};
  font-family: 'Bungee', sans-serif;
`;

export { BlockBackground, InnerColor, InnerText };
