import React from 'react';

import MoneyCounter from '@components/molecules/MoneyCounter';
import * as S from '@components/molecules/MoneyCounters/MoneyCounters.style';

const MoneyCounters = ({ money }) => {
  const putMoney = id => {
    // TODO: 지갑 구현 후 마무리
  };

  return (
    <S.Container>
      {money.map(item => (
        <MoneyCounter key={item.id} money={item} putMoney={putMoney} />
      ))}
    </S.Container>
  );
};

export default MoneyCounters;
