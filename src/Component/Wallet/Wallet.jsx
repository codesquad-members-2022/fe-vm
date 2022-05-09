import React from 'react';
import styled from 'styled-components';

import {MONEY_BUTTON_DATA} from '../../mocks/MoneyButtonData';

const createInsertButton = moneyList => {
  return moneyList.map(money => <MoneyBtn>{money + '원'}</MoneyBtn>);
};

export const Wallet = () => {
  return <WalletWrapper>{createInsertButton(MONEY_BUTTON_DATA)}</WalletWrapper>;
};

const WalletWrapper = styled.div`
  width: 350px;
  height: 1000px;
  border: 3px solid grey;
`;

const MoneyBtn = styled.div`
  width: 100px;
  height: 100px;
`;
