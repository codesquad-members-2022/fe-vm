import { useContext } from "react";
import styled from "styled-components";
import icons from "../../styles/icons";
import { Balance } from "../../contextProviders/BalanceProvider";
import { Records } from "../../contextProviders/RecordsProvider";
import { activityType } from "../../convention";

const Money = ({ moneyType, number }) => {
  const { wallet, inputSum, updateBalance } = useContext(Balance);
  const { updateRecord } = useContext(Records);

  const inputMoney = () => {
    if (!number) return;
    const newInputSum = inputSum + Number(moneyType);
    const newWallet = { ...wallet };
    newWallet[moneyType]--;
    updateBalance(newWallet, newInputSum);
    updateRecord(activityType.INPUT_MONEY, Number(moneyType));
  };

  return (
    <MoneyWrapper>
      <MoneyButton moneyType={moneyType} onClick={inputMoney} />
      <MoneyCounter>
        <img src={icons.MULTIPLY} alt="multiply" />
        <span>{number}</span>
      </MoneyCounter>
    </MoneyWrapper>
  );
};

const MoneyWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

const MoneyButton = styled.div`
  width: 140px;
  height: 70px;
  background: ${({ moneyType }) => `url(${icons.MONEY_IMG[moneyType]})`}
    no-repeat center;
  background-size: contain;
`;

const MoneyCounter = styled.div`
  img {
    height: 25px;
    width: 25px;
    object-fit: cover;
    margin: 0 30px;
  }

  span {
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export default Money;
