import { ItemBox } from '../showWindowItemBox/itemBox';
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
