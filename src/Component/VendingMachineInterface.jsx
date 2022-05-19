import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

export const VendingMachineInterface = ({
  handleRefundBtn,
  walletState: {insertedMoney, history},
  handleUserInput,
}) => {
  const [isInputClicked, setIsInputCliked] = useState(false);
  const onInputEnter = e => {
    if (e.key !== 'Enter') {
      return;
    }
    handleUserInput(e.target.value);
    setIsInputCliked(false);
  };

  return (
    <VM_Wrapper>
      {isInputClicked ? (
        <VM_MoneyInput onKeyDown={onInputEnter} />
      ) : (
        <VM_insertedMoney
          onClick={() => {
            setIsInputCliked(true);
          }}
        >
          {insertedMoney} 원
        </VM_insertedMoney>
      )}
      <VM_RefundBtn onClick={handleRefundBtn}>잔액 반환</VM_RefundBtn>
      <VM_History>
        {history.map(historyLog => {
          return <VM_HistoryLog>{historyLog}</VM_HistoryLog>;
        })}
      </VM_History>
    </VM_Wrapper>
  );
};

const VM_Wrapper = styled.ul`
  width: 40%;
  display: flex;
    align-items: center;
  justify-content: space-around;
  flex-direction: column;
    padding 10px
`;

const VM_MoneyInput = styled.input`
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
`;

const VM_RefundBtn = styled.button`
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 20px;
  background-color: white;
  padding: 10px;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const VM_History = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;

const VM_HistoryLog = styled.div`
  margin-bottom: 5px;
  border-bottom: 0.5px solid black;
  padding: 5px 0;
`;

const VM_insertedMoney = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
  color: grey;
`;
