import React, { useCallback, useEffect, useState } from 'react';
import Products from 'components/Products';
import { useProductContext } from 'context/Product';
import { useUserContext } from 'context/User';
import { insertChanges, orderProduct, returnChanges } from 'context/User/action';
import { getProducts } from 'context/Product/action';
import InputMoneyForm from './InputMoneyForm';
import InsertChangesForm from './InsertChangesForm';
import * as S from './style';

function VendingMachine() {
  const { vmDispatch } = useProductContext();
  const { totalBalance, changesUnits, prevInputChanges, userDispatch } = useUserContext();
  // FIXME: input defualt value 0일 때 에러 수정 -> 0123, 1230이런식으로 0이 안없어짐
  const [inputmoney, setInputMoney] = useState(0);

  const resetInputMoneny = () => setInputMoney(0);

  const handleOrderProduct = productId => {
    orderProduct(vmDispatch, productId, prevInputChanges);
    resetInputMoneny();
    getProducts(vmDispatch);
  };

  const handleSubmitInputMoney = useCallback(
    event => {
      // reducer로 옮기기
      event.preventDefault();
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
      const { unit, id } = closestUnit;
      console.log(
        `입력한 ${submitOnlyNumber}이 소유하고 있는 잔돈 중 가장 가까운 금액인 ${unit}으로 변경되었습니다.`,
      );
      resetInputMoneny();
      insertChanges(userDispatch, id);
    },
    [changesUnits, totalBalance, userDispatch],
  );

  const onChangeInputMoney = useCallback(({ target }) => {
    const { value } = target;
    const onlyNumber = Number(value.replace(/[^0-9]/g, ''));
    setInputMoney(onlyNumber);
  }, []);

  const isPriceUnderInputMoney = useCallback(
    targetPrice => targetPrice <= inputmoney,
    [inputmoney],
  );

  const insertChangeIntoInputMoney = useCallback(
    unitId => {
      resetInputMoneny();
      insertChanges(userDispatch, unitId);
    },
    [userDispatch],
  );

  const handleClickReturnChanges = useCallback(() => {
    resetInputMoneny();
    returnChanges(userDispatch);
  }, [userDispatch]);

  const getSumInsertMoney = units => {
    setInputMoney(prev => units.reduce((acc, cur) => acc + cur, prev));
  };

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
        <ul>log list</ul>
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
