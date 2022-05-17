import Money from 'components/Money';
import { WalletList, TotalMoney } from 'components/Wallet.Styled';

const Wallet = ({ walletInfo, totalMoney, handleClickMoney }) => {
  return (
    <WalletList as="ul">
      {walletInfo &&
        walletInfo.map(
          (money, index) =>
            money.unit && (
              <Money
                money={money}
                key={money.unit}
                index={index}
                handleClickMoney={handleClickMoney}
              />
            ),
        )}
      <TotalMoney>{totalMoney.toLocaleString()}원</TotalMoney>
    </WalletList>
  );
};

export default Wallet;
