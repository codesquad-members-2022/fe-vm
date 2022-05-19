import { getWonTemplate } from '../../../helper/utils';
import { StyledCoinBoxWrapper, StyledCoinBox } from './coinBox.styled';

export function CoinBox({ coinInfo }) {
  return (
    <StyledCoinBoxWrapper>
      <StyledCoinBox>{getWonTemplate(coinInfo.coin)}</StyledCoinBox>
      <StyledCoinBox>{`${coinInfo.quantity}개`}</StyledCoinBox>
    </StyledCoinBoxWrapper>
  );
}
