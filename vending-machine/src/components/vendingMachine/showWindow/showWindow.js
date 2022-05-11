import { ItemBox } from '../showWindow_itemBox/itemBox';
import { StyledShowWindowContainer } from './showWindow.styled';
import { useState } from 'react';

export function ShowWindow({ itemList }) {
  const [inProgress, setInProgress] = useState(false);

  return (
    <StyledShowWindowContainer>
      {itemList.map(item => (
        <ItemBox key={item.id} item={item} inProgress={inProgress} setInProgress={setInProgress} />
      ))}
    </StyledShowWindowContainer>
  );
}
