import { StyledItemContainer, StyledItemName, StyledItemPrice } from './itemBox.styled';
import { getWonTemplate } from '../../../helper/utils';

export function ItemBox({ item }) {
  return (
    <StyledItemContainer>
      <StyledItemName>{item.name}</StyledItemName>
      <StyledItemPrice>{getWonTemplate(Number(item.price))}</StyledItemPrice>
    </StyledItemContainer>
  );
}
