import React, { useCallback, useEffect, useState } from 'react';
import Products from 'components/Products';
import { useProductContext } from 'context/Product';
import { useUserContext } from 'context/User';
import { insertChanges, orderProduct, returnChanges } from 'context/User/action';
import { getProducts } from 'context/Product/action';
import { isLogin } from 'utils/cookie';
import InputMoneyForm from './InputMoneyForm';
import InsertChangesForm from './InsertChangesForm';
import ActionLogs from './ActionLogs';
import * as S from './style';

function VendingMachine() {
  const { vmDispatch } = useProductContext();
  const { nickname, totalBalance, changesUnits, prevInputChanges, userDispatch, actionLogs } =
    useUserContext();
  // FIXME: input defualt value 0일 때 에러 수정 -> 0123, 1230이런식으로 0이 안없어짐
  const [inputmoney, setInputMoney] = useState(0);

  const resetInputMoneny = () => setInputMoney(0);

  const handleOrderProduct = productId => {
    orderProduct(userDispatch, productId, prevInputChanges);
    resetInputMoneny();
    getProducts(vmDispatch);
  };

  const getSumInsertMoney = units => {
    setInputMoney(prev => units.reduce((acc, cur) => acc + cur, prev));
  };

  const preventNonLoginUser = useCallback(() => {
    if (!isLogin() || !nickname) {
      alert('로그인 이후 이용해주세요.');
      return true;
    }
    return false;
  }, [nickname]);

  const handleSubmitInputMoney = useCallback(
    event => {
      // reducer로 옮기기
      event.preventDefault();
      if (preventNonLoginUser()) {
        return;
      }
      if (totalBalance <= 0) {
        alert('잔고가 없어요');
        return;
      }
      const submitInputMoney = event.target.inputMoney.value;
      const [error, closestUnit, submitOnlyNumber] = adjustingWithExistUnit(
        changesUnits,
        submitInputMoney,
      );
      if (error.isError) {
        alert(error.msg);
        return;
      }
      const { id } = closestUnit;
      resetInputMoneny();
      insertChanges(userDispatch, id, submitOnlyNumber);
    },
    [changesUnits, preventNonLoginUser, totalBalance, userDispatch],
  );

  const onChangeInputMoney = useCallback(
    ({ target }) => {
      if (preventNonLoginUser()) {
        return;
      }
      const { value } = target;
      const onlyNumber = Number(value.replace(/[^0-9]/g, ''));
      setInputMoney(onlyNumber);
    },
    [preventNonLoginUser],
  );

  const isPriceUnderInputMoney = useCallback(
    targetPrice => targetPrice <= inputmoney,
    [inputmoney],
  );

  const insertChangeIntoInputMoney = useCallback(
    unitId => {
      if (preventNonLoginUser()) {
        return;
      }
      resetInputMoneny();
      insertChanges(userDispatch, unitId);
    },
    [preventNonLoginUser, userDispatch],
  );

  const handleClickReturnChanges = useCallback(() => {
    if (preventNonLoginUser()) {
      return;
    }
    resetInputMoneny();
    returnChanges(userDispatch);
  }, [userDispatch, preventNonLoginUser]);

  useEffect(() => {
    getSumInsertMoney(prevInputChanges);
  }, [prevInputChanges]);

  return (
    <S.Container>
      <Products
        isManger={false}
        isPriceUnderInputMoney={isPriceUnderInputMoney}
        handleOrderProduct={handleOrderProduct}
      />
      <S.InputContanier>
        <InputMoneyForm
          inputmoney={inputmoney}
          onChangeInputMoney={onChangeInputMoney}
          handleSubmitInputMoney={handleSubmitInputMoney}
          handleClickReturnChanges={handleClickReturnChanges}
        />
        <InsertChangesForm
          totalBalance={totalBalance}
          changesUnits={changesUnits}
          insertChangeIntoInputMoney={insertChangeIntoInputMoney}
        />
        <ActionLogs actionLogs={actionLogs} />
      </S.InputContanier>
    </S.Container>
  );
}

export default VendingMachine;

// 사용자 소지하고 있는 잔고에 가장 가까운 단위로 변환
const adjustingWithExistUnit = (existsUnits, submitNumber) => {
  const error = {
    isError: false,
    msg: '',
  };
  const submitOnlyNumber = Number(submitNumber.replaceAll(',', ''));
  if (submitOnlyNumber === 0) {
    error.isError = true;
    error.msg = '입력한 금액이 없어요.';
    return [error];
  }
  const existUnits = checkRestUnits(existsUnits);
  if (existUnits.length === 0) {
    error.isError = true;
    error.msg = '잔돈이 없어요.';
    return [error];
  }
  const targetUnit = findTargetUnit(existUnits, submitOnlyNumber);
  if (targetUnit) {
    return [error, targetUnit, submitOnlyNumber];
  }
  const closestUnit = findClosestUnit(existUnits, submitOnlyNumber);
  if (!closestUnit) {
    error.isError = true;
    error.msg = '투입한 금액에 근접한 잔고가 없어요.';
    return [error];
  }
  return [error, closestUnit, submitOnlyNumber];
};

const findClosestUnit = (existUnits, submitNumber) => {
  const closestUnit = existUnits.reduce((acc, cur) => {
    if (isAccBiggerThanCurrentWithAbs(submitNumber, acc.unit, cur.unit)) {
      return cur;
    }
    return acc;
  });
  return closestUnit;
};

const isAccBiggerThanCurrentWithAbs = (submitNumber, acc, cur) =>
  Math.abs(submitNumber - acc) > Math.abs(submitNumber - cur);

const findTargetUnit = (existUnits, submitNumber) => {
  const targetUnit = existUnits.find(({ unit }) => unit === submitNumber);
  return targetUnit;
};

const checkRestUnits = units => {
  const existUnits = units.filter(unit => unit.count !== 0);
  return existUnits;
};
