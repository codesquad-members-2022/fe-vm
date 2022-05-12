import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';
import Container from '../../UI/container';
import Button from '../../UI/Button';
import AmountContext from '../../../store/AmountContext';

const VendingForm = (props) => {
  const amountInputRef = useRef();
  const amountCtx = useContext(AmountContext);

  const submitHandler = (event) => {
    event.preventDefault();
    amountCtx.add(amountInputRef.current.value);
  };

  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: 'amount',
            type: 'number',
            min: '0',
            max: amountCtx.balance,
            defaultValue: '0',
          }}
        />
        <p style={{ marginBottom: '10px' }}>경고 메세지</p>
        <InputButton>입금하기</InputButton>
      </StyledForm>
      <InputButton>반환하기</InputButton>
    </>
  );
};

const InputButton = styled(Button)`
  width: calc(80% + 20px);
  height: 50px;
  background-color: ${({ theme }) => theme.colors.navy};
  color: #fff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepNavy};
  }
`;

const StyledForm = styled.form`
  ${({ theme }) => theme.mixin.flexMixin('column')};
  width: 100%;
`;

export default VendingForm;
