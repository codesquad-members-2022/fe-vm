import { useContext } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';

const MoneyBox = ({ money: { amount, count } }) => {
  const [, setLogs] = useContext(LogContext);
  const { walletMoney, setWalletMoney, inputMoney, setInputMoney } =
    useContext(MoneyContext);

  const isActive = count !== 0;

  const handleClickMoneyAmount = () => {
    if (count === 0) return;
    const newMoney = walletMoney.map((oMoney) => {
      if (amount === oMoney.amount) {
        return { ...oMoney, count: count - 1 };
      }
      return oMoney;
    });
    setInputMoney(inputMoney + amount);
    setWalletMoney(newMoney);
    setLogs({
      type: 'insert',
      data: amount,
    });
  };

  return (
    <Wrapper>
      <MoneyAmount isActive={isActive} onClick={handleClickMoneyAmount}>
        {amount}원
      </MoneyAmount>
      <MoneyCount>{count}개</MoneyCount>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;

const BorderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0px 5px;
  border: 1px solid black;
  border-radius: 5px;
`;

const MoneyAmount = styled(BorderBox)`
  background-color: ${({ isActive }) =>
    isActive ? COLORS.MAIN_BG : COLORS.WHITE};
  ${({ isActive }) => {
    if (isActive) {
      return `
            transition: all 0.2s;
            cursor: pointer;
            &:hover {
                background-color: ${COLORS.GREY};
                color: ${COLORS.WHITE};
            }
        `;
    }
    return '';
  }}
`;

const MoneyCount = styled(BorderBox)``;

export default MoneyBox;
