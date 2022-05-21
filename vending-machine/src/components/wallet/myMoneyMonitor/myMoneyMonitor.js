import { StyledMyMoney } from './myMoneyMonitor.styled';
import { getWonTemplate } from '../../../helper/utils';

export function MyMoneyMonitor({ walletInfo }) {
  function getMyMoney() {
    return walletInfo.reduce((acc, cur) => {
      return acc + cur.coin * cur.quantity;
    }, 0);
  }
  return <StyledMyMoney>{getWonTemplate(getMyMoney())}</StyledMyMoney>;
}
