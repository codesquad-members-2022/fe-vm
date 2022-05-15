import React from 'react';
import styled from 'styled-components';

import DrinkMenu from '../components/DrinkMenu';
import Order from '../components/Order';
import { flexCenter } from '../style/mixins';
import { color } from '../style/variables';

const Home = () => {
  return (
    <>
      <StyledDrinkMenuBox>
        <DrinkMenu />
      </StyledDrinkMenuBox>
      <StyledOrderBox>
        <Order />
      </StyledOrderBox>
    </>
  );
};

const StyledDrinkMenuBox = styled.ul`
  ${flexCenter}
  width: 70%;
  flex-wrap: wrap;
  border: 3px solid ${color.black};
`;

const StyledOrderBox = styled.div`
  border: 3px solid ${color.black};
  width: 30%;
`;

export default Home;
