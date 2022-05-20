import { getWonTemplate } from '../../../helper/utils';
import { StyledCoinBoxWrapper, StyledCoinBox } from './coinBox.styled';
import { WalletContext } from '../../../context/walletProvider';
import { useContext } from 'react';

export function CoinBox({ coinInfo }) {
  const { decrementCoin } = useContext(WalletContext);

  function handleClick() {
    if (coinInfo.quantity > 0) {
      decrementCoin(coinInfo.coin);
    }
  }

  return (
    <StyledCoinBoxWrapper>
      <StyledCoinBox onClick={handleClick}>{getWonTemplate(coinInfo.coin)}</StyledCoinBox>
      <StyledCoinBox onClick={handleClick}>{`${coinInfo.quantity}개`}</StyledCoinBox>
    </StyledCoinBoxWrapper>
  );
}
