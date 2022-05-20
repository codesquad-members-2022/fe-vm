import React, { useCallback, useEffect, useState } from 'react';

import { useProductContext } from 'context/Product';
import { useUserContext } from 'context/User';
import { useNotification } from 'context/Notification';
import { insertChanges, orderProduct, returnChanges } from 'context/User/action';
import { notifyNewMessage } from 'context/Notification/action';
import { getProducts } from 'context/Product/action';

import Products from 'components/Products';

import useSetTimeout from 'hooks/useSetTimeout';
import productApi from 'api/product';
import NOTIFY_TYPE from 'constant/notification';
import { isLogin } from 'utils/cookie';

import InputMoneyForm from './InputMoneyForm';
import InsertChangesForm from './InsertChangesForm';
import ActionLogs from './ActionLogs';
import * as S from './style';

function VendingMachine() {
  const { targetProduct, productDispatch } = useProductContext();
  const { nickname, totalBalance, changesUnits, prevInputChanges, userDispatch, actionLogs } =
    useUserContext();
  const { notifyDispatch } = useNotification();
  const [inputMoney, setInputMoney] = useState(0);
  const [canOrderTigger, setCanOrderTigger] = useState(false);

  const resetInputMoneny = () => setInputMoney(0);

  const getSumInsertMoney = units => units.reduce((acc, cur) => acc + cur, 0);

  const requestOrderProduct = async () => {
    const { id } = targetProduct;
    try {
      const {
        data: { newProducts, ...userInfo },
      } = await productApi.orderProduct(id, prevInputChanges);
      orderProduct(userDispatch, userInfo);
      getProducts(productDispatch, { products: newProducts });
      resetInputMoneny();
      setCanOrderTigger(false);
    } catch (error) {
      notifyNewMessage(notifyDispatch, error.errorMessage, NOTIFY_TYPE.Error);
    }
  };

  const handleClickTriggerOrder = useCallback(
    productInfo => {
      if (preventNonLoginUser()) {
        return;
      }
      const { price, ea } = productInfo;
      const newInputSum = getSumInsertMoney(prevInputChanges);
      if (newInputSum <= 0) {
        notifyNewMessage(notifyDispatch, '금액을 투입해주세요.', NOTIFY_TYPE.Warning);
        return;
      }
      if (ea <= 0) {
        notifyNewMessage(notifyDispatch, '주문할 수 있는 상품 수량이 없어요.', NOTIFY_TYPE.Warning);
        return;
      }
      if (newInputSum < price) {
        notifyNewMessage(notifyDispatch, '투입 금액이 상품 가격보다 작아요', NOTIFY_TYPE.Warning);
        return;
      }
      setCanOrderTigger(true);
    },
    [notifyDispatch, prevInputChanges],
  );

  const preventNonLoginUser = useCallback(() => {
    if (!isLogin() || !nickname) {
      notifyNewMessage(notifyDispatch, '로그인 이후에 이용해주세요', NOTIFY_TYPE.Warning);
      return true;
    }
    return false;
  }, [nickname, notifyDispatch]);

  const handleSubmitInputMoney = useCallback(
    event => {
      // reducer로 옮기기
      event.preventDefault();
      if (preventNonLoginUser()) {
        return;
      }
      if (totalBalance <= 0) {
        notifyNewMessage(notifyDispatch, '잔고가 없어요.', NOTIFY_TYPE.Warning);
        return;
      }
      const submitInputMoney = event.target.inputMoney.value;
      const [error, closestUnit, submitOnlyNumber] = adjustingWithExistUnit(
        changesUnits,
        submitInputMoney,
      );
      if (error.isError) {
        notifyNewMessage(notifyDispatch, error.msg, NOTIFY_TYPE.Error);
        return;
      }
      const { id } = closestUnit;
      resetInputMoneny();
      insertChanges(userDispatch, id, submitOnlyNumber);
    },
    [changesUnits, notifyDispatch, preventNonLoginUser, totalBalance, userDispatch],
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
    targetPrice => targetPrice <= inputMoney,
    [inputMoney],
  );

  const insertChangeIntoInputMoney = useCallback(
    unitId => {
      if (preventNonLoginUser()) {
        return;
      }
      const targetUnit = changesUnits.find(unit => unit.id === unitId);
      if (targetUnit.count <= 0) {
        notifyNewMessage(notifyDispatch, '투입할 잔돈이 없어요.', NOTIFY_TYPE.Warning);
        return;
      }
      resetInputMoneny();
      insertChanges(userDispatch, unitId);
    },
    [changesUnits, notifyDispatch, preventNonLoginUser, userDispatch],
  );

  const handleClickReturnChanges = useCallback(() => {
    if (preventNonLoginUser()) {
      return;
    }
    resetInputMoneny();
    returnChanges(userDispatch);
  }, [userDispatch, preventNonLoginUser]);

  useEffect(() => {
    const newInputSum = getSumInsertMoney(prevInputChanges);
    setInputMoney(prev => prev + newInputSum);
  }, [prevInputChanges]);

  useSetTimeout({
    delay: RESET_TIME,
    tigger: [prevInputChanges, targetProduct?.id],
    triggerCondition: getSumInsertMoney(prevInputChanges) > 0 && !canOrderTigger,
    callback: handleClickReturnChanges,
  });

  useSetTimeout({
    delay: DELAY_ORDER,
    tigger: [canOrderTigger],
    triggerCondition: canOrderTigger,
    callback: requestOrderProduct,
  });

  return (
    <S.Container>
      <Products
        isManger={false}
        canSelectContidition={isPriceUnderInputMoney}
        handleClickTriggerOrder={handleClickTriggerOrder}
      />
      <S.InputContanier>
        <InputMoneyForm
          inputMoney={inputMoney}
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

const RESET_TIME = 5000;
const DELAY_ORDER = 2000;

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
