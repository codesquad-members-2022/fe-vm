import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const WalletItem = ({ unit, quantity }) => {
  return (
    <>
      <StyledItem content={`${unit}원`} disabled={false} onClick={() => {}} />
      <StyledItem as={'span'}>{quantity}개</StyledItem>
    </>
  );
};

const StyledItem = styled(Button)`
  width: 50%;
  border: 2px solid black;
  margin: 20px 25px;
  padding: 10px;
`;

export default WalletItem;
