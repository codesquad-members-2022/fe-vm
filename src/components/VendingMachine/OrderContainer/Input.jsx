import { useEffect, useState } from 'react';
import { useMoneyState } from 'context/MoneyContext';

import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';
import calculateTotalMoney from 'utils/calculateTotalMoney';
import insertWalletMoney from 'utils/insertMoney';

export default function UserInput() {
  const { walletMoneyData, inputInsertMoney } = useMoneyState();
  const [inputValue, setInputValue] = useState('');
  const totalMoney = calculateTotalMoney(walletMoneyData);

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
    const insertLog = insertWalletMoney(walletMoneyData, removeLocalString, totalMoney);
    inputInsertMoney(insertLog);
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
