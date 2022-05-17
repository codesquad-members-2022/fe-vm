import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { TotalMoneyContext } from '../App';
import SumMoney from '../components/SumMoney';
import TotalMoney from '../components/TotalMoney';
import { flexBetween } from '../style/mixins';
import { getData } from '../utility/util';
import WalletItem from '../components/WalletItem';

const Wallet = () => {
  const [coinData, setCoinData] = useState([]);
  const [totalMoney, setTotalMoney] = useContext(TotalMoneyContext);

  useEffect(() => {
    const coinUrl = `${process.env.PUBLIC_URL}/data/coin.json`;

    getData(coinUrl, setCoinData);
  }, []);

  return (
    <WalletContainer>
      {coinData.map(({ id, unit, quantity }) => (
        <WalletBox key={id}>
          <WalletItem unit={unit} quantity={quantity} />
        </WalletBox>
      ))}
      <TotalMoney totalMoney={totalMoney} />
      <SumMoney coinData={coinData} />
    </WalletContainer>
  );
};

const WalletContainer = styled.ul`
  margin: 0 auto;
  width: 400px;
  height: 1000px;
  border: 2px solid black;
`;

const WalletBox = styled.li`
  ${flexBetween}
  font-size: 30px;
`;

export default Wallet;
