import { StyledCoinWindowContainer } from './coinWindow.style';
import { CoinBox } from '../coinWindowCoinBox/coinBox';

export function CoinWindow({ walletInfo }) {
  return (
    <StyledCoinWindowContainer>
      {walletInfo.map(coinInfo => {
        return <CoinBox key={coinInfo.id} coinInfo={coinInfo} />;
      })}
    </StyledCoinWindowContainer>
  );
}
