import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProgressContext } from '../App';
import { color, fontSize } from '../style/variables';

const ReturnBtn = ({ totalMoney, setTotalMoney }) => {
  const { returnMoneyMessage } = useContext(ProgressContext);

  const returnTotalMoney = () => {
    if (totalMoney <= 0) return;
    returnMoneyMessage(totalMoney);
    setTotalMoney(0);
  };

  return <StyledBtn onClick={returnTotalMoney}>반환</StyledBtn>;
};

const StyledBtn = styled.button`
  margin-top: 20px;
  font-size: ${fontSize.xl};
  width: 270px;
  height: 60px;
  border: 2px solid ${color.grey};
`;

export default ReturnBtn;
