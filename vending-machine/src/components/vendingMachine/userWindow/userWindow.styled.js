import styled from 'styled-components';

export const StyledUserWindowContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-left: 20px;
  padding-top: 50px;
`;

export const StyledInputMoneyMonitorWrapper = styled.div`
  margin-bottom: 30px;
  p {
    text-align: center;
    font-size: 30px;
  }
`;
export const StyledInputMoneyMonitor = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  font-size: 30px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

export const StyledInputBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 100px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  margin-bottom: 30px;
  * {
    font-size: 26px;
    color: ${({ theme }) => theme.color.darkGray};
    text-align: center;
    height: 100px;
    line-height: 100px;
  }
`;

export const StyledInputBox = styled.input`
  width: 84%;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

export const StyledRepaymentBtn = styled.button`
  width: 300px;
  height: 60px;
  font-size: 30px;
  margin-bottom: 30px;
`;
