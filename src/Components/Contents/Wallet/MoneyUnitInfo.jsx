import { useContext } from 'react';
import styled from 'styled-components';
import { MessageContext } from '../../../Context/MessageProvider';
import { PayMoneyContext, PayTotalContext } from '../../../Context/PayProvider';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import { changeNumToLocalMoney, getMessage } from '../../../Utils/utils';
import { MessageType } from '../../../Utils/constants';
import {
  Color,
  FontSize,
  FontWeight,
  F_BetweenCenter,
  Radius10,
} from '../../../Assets/Common.style';

export default function MoneyUnitInfo() {
  return (
    <MoneyContainer>
      <Money />
    </MoneyContainer>
  );
}

function Money() {
  const { printMessages, setPrintMessages } = useContext(MessageContext);
  const { payTotal, setPayTotal } = useContext(PayTotalContext);
  const { setPayMoney } = useContext(PayMoneyContext);
  const { walletMoneyUnitInfo, updateWalletMoney } =
    useContext(WalletMoneyContext);

  const moneyClickHandler = (moneyInfo) => {
    updateWalletMoney(moneyInfo);
    setPayMoney(moneyInfo.unit);
    setPayTotal(payTotal + moneyInfo.unit);
    const addMessage = getMessage(
      MessageType.ADD,
      changeNumToLocalMoney(moneyInfo.unit),
    );
    setPrintMessages([...printMessages, addMessage]);
  };

  const MoneyItems = walletMoneyUnitInfo.map((moneyInfo) => {
    return (
      <MoneyBox key={moneyInfo.unit} moneyType={moneyInfo.type}>
        <MoneyButton
          type="button"
          moneyType={moneyInfo.type}
          disabled={!moneyInfo.count}
          onClick={moneyClickHandler.bind(null, moneyInfo)}
        >
          {changeNumToLocalMoney(moneyInfo.unit)}
        </MoneyButton>
        <MoneyCount>{moneyInfo.count}</MoneyCount>
      </MoneyBox>
    );
  });
  return MoneyItems;
}

const MoneyContainer = styled.ul`
  ${F_BetweenCenter}
  flex-wrap: wrap;
  margin: 40px 0;
  gap: 20px;
`;

const MoneyBox = styled.li`
  ${F_BetweenCenter}
  width: ${({ moneyType }) =>
    moneyType === 'coin' ? `calc(25% - 15px)` : 'calc(33.333% - 13.333px)'};
  padding: 10px;
  ${Radius10};
  font-size: ${FontSize.LARGE};
  font-weight: ${FontWeight.BOLD};
  background: ${Color.BACKGROUND};
`;

const MoneyButton = styled.button`
  flex-shrink: 0;
  width: ${({ moneyType }) => (moneyType === 'coin' ? `60px` : '128px')};
  height: 60px;
  border-radius: ${({ moneyType }) => (moneyType === 'coin' ? `50%` : '0')};
  font-weight: inherit;
  color: ${Color.WHITE};
  background: ${Color.GRAY};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);

  &:not(:disabled):hover {
    background: ${Color.ORANGE[200]};
  }
`;

const MoneyCount = styled.span`
  width: 100%;
  text-align: center;
`;
