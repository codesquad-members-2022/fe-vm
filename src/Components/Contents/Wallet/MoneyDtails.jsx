import { useContext } from 'react';
import styled from 'styled-components';
import {
  Color,
  FontSize,
  FontWeight,
  F_BetweenCenter,
  Radius10,
} from '../../../Assets/Common.style';
import { MessageType } from '../../../Utils/constants';
import { changeNumToLocalMoney, getMessage } from '../../../Utils/utils';
import { contentsContext, myMoneyContext } from '../../MainContents';

export default function MoneyDtails() {
  return (
    <MoneyContainer>
      <Money />
    </MoneyContainer>
  );
}

function Money() {
  const { payTotal, setPayTotal, printMessages, setPrintMessages } =
    useContext(contentsContext);
  const { myMoneyDetails, setMyMoneyDetails } = useContext(myMoneyContext);

  const payMoney = (moneyInfo) => {
    const updateMoney = {
      type: moneyInfo.type,
      unit: moneyInfo.unit,
      count: moneyInfo.count - 1,
    };
    const updateMoneyDetails = myMoneyDetails.map((money) => {
      return money.unit === moneyInfo.unit ? updateMoney : money;
    });
    const addMessage = getMessage(
      MessageType.ADD,
      changeNumToLocalMoney(moneyInfo.unit),
    );

    setPrintMessages([...printMessages, addMessage]);
    setPayTotal(payTotal + moneyInfo.unit);
    setMyMoneyDetails(updateMoneyDetails);
  };

  const moneyTags = myMoneyDetails.map((moneyInfo) => {
    return (
      <MoneyBox key={moneyInfo.unit} moneyType={moneyInfo.type}>
        <MoneyButton
          type="button"
          moneyType={moneyInfo.type}
          disabled={!moneyInfo.count}
          onClick={payMoney.bind(null, moneyInfo)}
        >
          {changeNumToLocalMoney(moneyInfo.unit)}
        </MoneyButton>
        <MoneyCount>{moneyInfo.count}</MoneyCount>
      </MoneyBox>
    );
  });
  return moneyTags;
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
