import React from 'react';
import styled from 'styled-components';
import { Default_radius, Default_shadow, Color } from 'Assets/Style/Common';
import CoinStatusInfo from './statusCoinInfo';
import StatusInputForm from './statusInputForm';
import StatusInfo from './statusInfo';

const StatusWindow = () => {
  return (
    <StatusWindowBox>
      <CoinStatusInfo />
      <DesignLine />
      <StatusInputForm />
      <StatusInfo />
      <Message>최근 7개 내역까지 노출됩니다.</Message>
    </StatusWindowBox>
  );
};

const Message = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6e757d;
`;
const DesignLine = styled.div`
  width: 48rem;
  height: 0.1rem;
  margin-top: 3rem;
  background: #3d444c;
`;
const StatusWindowBox = styled.div`
  display: flex;
  flex-direction: column;
  ${Default_radius}
  ${Default_shadow}
  background-color: ${Color.darkGray};
  margin-left: 20px;
  padding: 4.8rem 4rem 2.2rem;
  width: 48rem;
  height: 71rem;
`;

export default StatusWindow;
