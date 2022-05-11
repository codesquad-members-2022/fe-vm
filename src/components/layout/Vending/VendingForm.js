import React, { useRef, useContext } from 'react';
import Input from '../../UI/Input';
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
      <form onSubmit={submitHandler}>
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
        <button style={{ width: '100%' }}>입금</button>
      </form>
      <button>반환</button>
    </>
  );
};

export default VendingForm;
