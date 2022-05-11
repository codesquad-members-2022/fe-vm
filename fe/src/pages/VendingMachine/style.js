import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
`;

export const InsertMoneyFormContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const InsertMoneyFormBox = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #222;
  input {
    border: none;
    text-align: right;
    &:focus {
      outline: none;
    }
  }
`;
