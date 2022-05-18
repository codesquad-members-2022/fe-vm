import React, {
  useRef,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import AmountContext from '../../../store/AmountContext';
import { INITAIL_INSERT } from '../../../constant/constant';

const checkValid = (wallet, money) => {
  const newInsertedMoney = {};
  const walletObj = Object.entries(wallet);
  for (let i = walletObj.length - 1; i >= 0; i--) {
    const [unit, count] = walletObj[i];
    if (Number(unit) > money) continue;
    if (Number(unit) * Number(count) < money) continue;
    else {
      let use = Math.floor(money / Number(unit));
      money -= Number(unit) * use;
      newInsertedMoney[unit] = use;
    }
  }

  const moneyisValid = !money ? true : false;
  return [moneyisValid, newInsertedMoney];
};

const VendingForm = () => {
  const amountInputRef = useRef();
  const amountCtx = useContext(AmountContext);
  const [isInputValid, setIsInputValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const insertedMoney = amountInputRef.current.value;
    const [isValid, newInsertedMoneyObj] = checkValid(
      amountCtx.wallet,
      insertedMoney
    );

    if (isValid) {
      setIsInputValid(true);
      amountCtx.setWallet((prev) => {
        const walletChagedUnit = {};
        for (const unit in newInsertedMoneyObj) {
          walletChagedUnit[unit] = prev[unit] - newInsertedMoneyObj[unit];
        }
        return { ...prev, ...walletChagedUnit };
      });

      amountCtx.setInsertedMoney((prev) => {
        const walletChagedUnit = {};
        for (const unit in newInsertedMoneyObj) {
          walletChagedUnit[unit] = prev[unit] + newInsertedMoneyObj[unit];
        }
        return { ...prev, ...walletChagedUnit };
      });

      amountCtx.setLogs((prev) => {
        const newLog = `${insertedMoney}원이 입금되었습니다.`;
        return [...prev, newLog];
      });
    } else {
      setIsInputValid(false);
    }
  };

  useEffect(() => {
    amountInputRef.current.value = amountCtx.totalAmount;
  }, [amountCtx.totalAmount]);

  const inputOnfocusHandler = useCallback(() => {
    amountInputRef.current.value = '';
  }, []);

  const onClickHandler = () => {
    const inserted = amountCtx.insertedMoney;
    const totalAmount = amountCtx.totalAmount;

    amountCtx.setWallet((prev) => {
      const prevWallet = prev;
      for (const unit in inserted) {
        prevWallet[unit] += inserted[unit];
      }
      return prevWallet;
    });

    amountCtx.setInsertedMoney(INITAIL_INSERT);
    amountCtx.setLogs((prev) => {
      const newLog = `${totalAmount}원이 반환되었습니다.`;
      return [...prev, newLog];
    });
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
            defaultValue: amountCtx.totalAmount,
            onFocus: inputOnfocusHandler,
          }}
        />
        <p style={{ marginBottom: '10px' }}>
          {!isInputValid ? '투입금액을 확인해주세요.' : ''}
        </p>
        <InputButton>입금하기</InputButton>
      </StyledForm>
      <InputButton onClick={onClickHandler}>반환하기</InputButton>
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
