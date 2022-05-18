import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 36px;
`;

export const InputContanier = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const InputMoneyFormBox = styled.form`
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

export const Buttons = styled.div``;

export const InsertChangesContainer = styled.ul`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  > li {
    display: flex;
    gap: 12px;
    width: 200px;
  }
`;
