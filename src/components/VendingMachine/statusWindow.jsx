import React from 'react';
import styled from 'styled-components';
import { Default_radius, Default_shadow, Color } from 'Assets/Style/Common';

const StatusWindow = () => {
  return (
    <StatusWindowBox>
      <span>상태창</span>
    </StatusWindowBox>
  );
};

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
