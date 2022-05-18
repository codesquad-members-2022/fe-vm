import React, { useState } from 'react';

import Button, { BUTTON_SIZE } from '@components/atoms/Button';
import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import InputBox, { NO_BALANCE } from '@components/atoms/InputBox';
import LogBox from '@components/molecules/LogBox';
import SelectForm from '@components/molecules/SelectForm';
import * as S from '@components/organisms/VendingMachineInfo/VendingMachineInfo.style';
import logs from '@data/logs';

const VendingMachineInfo = () => {
  const [inputValue, setInputValue] = useState(NO_BALANCE);

  return (
    <S.Container>
      <DisplayBox size={DISPLAY_BOX_SIZE.MEDIUM} title='총 투입 금액' content={`${NO_BALANCE}원`} />
      <InputBox inputValue={inputValue} setInputValue={setInputValue} />
      <SelectForm />
      <Button size={BUTTON_SIZE.X_LARGE}>반환</Button>
      <LogBox logs={logs} />
    </S.Container>
  );
};

export default VendingMachineInfo;
