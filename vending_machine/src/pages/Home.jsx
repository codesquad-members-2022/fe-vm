import React from 'react';
import styled from 'styled-components';

import DrinkMenu from '../components/DrinkMenu';
import Order from '../components/Order';
import { flexCenter } from '../style/mixins';

const Home = ({ drinkData }) => {
  return (
    <>
      <DrinkMenuBox>
        <DrinkMenu drinkData={drinkData} />
      </DrinkMenuBox>
      <OrderBox>
        <Order />
      </OrderBox>
    </>
  );
};

const DrinkMenuBox = styled.ul`
  ${flexCenter}
  width: 70%;
  flex-wrap: wrap;
  border: 3px solid black;
`;

const OrderBox = styled.div`
  border: 3px solid black;
  width: 30%;
`;

export default Home;
