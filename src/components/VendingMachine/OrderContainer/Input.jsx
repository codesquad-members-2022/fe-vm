import { useEffect, useContext, useState } from 'react';
import { LogContext } from 'context/LogContext';
import { MoneyContext } from 'context/MoneyContext';
import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';
import calculateTotalMoney from 'utils/calculateTotalMoney';

export default function UserInput() {
  const { insertMoneyLog } = useContext(LogContext);
  const { walletMoneyData, inputInsertMoney } = useContext(MoneyContext);
  const [inputValue, setInputValue] = useState('');
  const totalMoney = calculateTotalMoney(walletMoneyData);

  const insertWalletMoney = num => {
    const insertLog = [];

    // 자동보정
    let money = Math.floor(num / 10) * 10;
    if (totalMoney < money) {
      insertMoneyLog(walletMoneyData);
      return walletMoneyData;
    }

    walletMoneyData.forEach(item => {
      // 천원 투입시 만원이 사용되지않도록, 해당하는 금액의 수량이 없으면 리턴
      if (!Math.floor(money / item.unit) || !item.amount) return;

      // 15000원을 투입했는데 5000원권이 2개밖에 없다면?
      if (item.unit * item.amount < money) {
        const 투입가능금액 = item.unit * item.amount;
        const 투입가능횟수 = Math.floor(투입가능금액 / item.unit);
        insertLog.push({ ...item, amount: 투입가능횟수 });
        money -= 투입가능금액;
        return;
      }

      const 투입가능횟수 = Math.floor(money / item.unit);
      insertLog.push({ ...item, amount: 투입가능횟수 });
      money - item.unit < item.unit && money <= 0
        ? (money -= item.unit)
        : (money -= item.unit * 투입가능횟수);
    });

    insertMoneyLog(insertLog);
    return insertLog;
  };

  const handleChange = e => {
    if (e.target.value.length > 6) return;
    setInputValue(setLocalString(e.target.value.replace(/[^0-9]/g, '')));
  };

  useEffect(() => {
    setInputValue(setLocalString(inputValue.replace(/[^0-9]/g, '')));
  }, [inputValue, setInputValue]);

  const handleClick = () => {
    if (inputValue === '0') {
      return;
    }

    if (!totalMoney) {
      setInputValue('');
      return;
    }

    const removeLocalString = Number(inputValue.replace(',', ''));
    inputInsertMoney(insertWalletMoney(removeLocalString));
    setInputValue('');
  };

  const handleEnterPress = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputCost
          type="text"
          placeholder="0"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleEnterPress}
        />
        <span>원</span>
      </InputWrapper>
      <InputCostBtn onClick={handleClick} disabled={inputValue === '0' || inputValue === ''}>
        투입
      </InputCostBtn>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  margin-right: 12px;
  padding: 0 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.1);

  span {
    ${({ theme }) => theme.fontStyles.xSmallBold};
  }
`;

const InputCost = styled.input`
  width: 80%;
  padding: 8px;
  text-align: right;
  border: none;
  outline: none;
  background: transparent;
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;

const InputCostBtn = styled.button`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray3};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.1);
  color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;
