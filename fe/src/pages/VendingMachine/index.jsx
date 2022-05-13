import React, { useCallback, useState } from 'react';
import Products from 'components/Products';
import { useVMContext } from 'context/VMContext';
import InsertMoneyForm from './InsertMoneyForm';
import * as S from './style';

function VendingMachine() {
  const { totalBalance, changesUnits } = useVMContext();
  // FIXME: input defualt value 0일 때 에러 수정 -> 0123, 1230이런식으로 0이 안없어짐
  const [insertMoney, setInsertMoney] = useState(0);

  const handleSubmitInsertMoney = useCallback(
    event => {
      event.preventDefault();
      const submitInsertMoney = event.target.insertMoney.value;
      const submitOnlyNumber = Number(submitInsertMoney.replaceAll(',', ''));
      const existUnits = changesUnits.filter(unit => unit.count !== 0);
      if (!existUnits) {
        alert('잔돈이 없어요');
      }
      const targetUnit = findTargetUnit(existUnits, submitOnlyNumber);
      console.log('targetUnit :>> ', targetUnit);
      if (!targetUnit) {
        const closestUnit = findClosestUnit(existUnits, submitOnlyNumber);
        if (!closestUnit) {
          alert('가까운 돈도 없어요');
        }
        console.log('target :>> ', closestUnit);
      }
      // TODO: 가까운 잔고 단위가 없거나 현재 돈보다 입력 값이 크면 사용자 에러
    },
    [changesUnits],
  );

  const onChangeInsertMoney = useCallback(({ target }) => {
    const { value } = target;
    const onlyNumber = Number(value.replace(/[^0-9]/g, ''));
    setInsertMoney(onlyNumber);
  }, []);

  const isPriceUnderInsertMoney = useCallback(
    targetPrice => targetPrice <= insertMoney,
    [insertMoney],
  );

  return (
    <S.Container>
      <Products isManger={false} isPriceUnderInsertMoney={isPriceUnderInsertMoney} />
      <InsertMoneyForm
        totalBalance={totalBalance}
        insertMoney={insertMoney}
        onChangeInsertMoney={onChangeInsertMoney}
        handleSubmitInsertMoney={handleSubmitInsertMoney}
      />
    </S.Container>
  );
}

export default VendingMachine;

const findClosestUnit = (existUnits, submitOnlyNumber) => {
  return existUnits.reduce((acc, { unit }) => {
    const substractAbs = Math.abs(submitOnlyNumber - acc);
    if (substractAbs < acc) {
      return acc;
    }
    return unit;
  }, 0);
};

const findTargetUnit = (existUnits, submitOnlyNumber) => {
  const targetUnit = existUnits.find(({ unit }) => unit === submitOnlyNumber);
  return targetUnit?.unit;
};
