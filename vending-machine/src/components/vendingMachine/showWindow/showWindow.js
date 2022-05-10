import { ItemBox } from '../showWIndow_itemBox/itemBox';
import { StyledShowWindowContainer } from './showWindow.styled';

export function ShowWindow({ itemList }) {
  return (
    <StyledShowWindowContainer>
      {itemList.map(item => (
        <ItemBox key={item.id} item={item} />
      ))}
    </StyledShowWindowContainer>
  );
}
