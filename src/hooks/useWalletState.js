import { useContext } from 'react';
import { addCommasToNumber } from 'utils/util';
import { WalletContext, WalletSetContext } from 'contexts/WalletProvider';

export default function useWalletState() {
  const [walletState, setWalletState] = [useContext(WalletContext), useContext(WalletSetContext)];

  const getAmount = () => {
    const amount = walletState.reduce((acc, { unit, quantity }) => acc + unit * quantity, 0);
    return addCommasToNumber(amount);
  };

  const decreaseQuantity = moneyID => {
    const newWalletState = walletState.map(item =>
      item.id === moneyID ? { ...item, quantity: item.quantity - 1 } : item
    );
    setWalletState(newWalletState);
  };

  const decreaseUnitsToBeUsed = unitsToBeUsed => {
    const newWalletState = walletState.map(unitInfo => {
      let newUnitInfo = unitInfo;

      unitsToBeUsed.forEach(unitToBeUsed => {
        if (unitToBeUsed === unitInfo.unit) newUnitInfo = { ...unitInfo, quantity: newUnitInfo.quantity - 1 };
      });

      return newUnitInfo;
    });

    setWalletState(newWalletState);
  };

  return { getAmount, decreaseQuantity, decreaseUnitsToBeUsed };
}
