import { useContext } from "react";

import { vendingMachineContext } from "App.jsx";
import styled from "styled-components";

function Wallet() {
    const { walletLoading, coinList } = useContext(vendingMachineContext);

    const sumOfCoins = walletLoading
        ? 0
        : coinList
              .reduce((prev, curr) => {
                  return prev + curr.value * curr.quantity;
              }, 0)
              .toLocaleString("ko-KR");

    const coins = walletLoading
        ? "walletLoading..."
        : coinList.map((coin) => (
              <li key={coin.id}>
                  <CoinValue>{coin.value.toLocaleString("ko-KR")}원</CoinValue>
                  <CoinQuantity>{coin.quantity.toLocaleString("ko-KR")}개</CoinQuantity>
              </li>
          ));

    return (
        <WalletBox>
            <ul>{coins}</ul>
            <TotalPrice>총액: {sumOfCoins}</TotalPrice>
        </WalletBox>
    );
}

const WalletBox = styled.div`
    width: 350px;
    border: 3px solid black;
    margin: 0 auto;
`;

const CoinValue = styled.button`
    display: inline-block;
    width: 150px;
    margin: 20px;
    font-size: 2rem;
    border: 2px solid black;
    text-align: center;
    cursor: pointer;
`;

const CoinQuantity = styled.span`
    display: inline-block;
    width: 120px;
    font-size: 2rem;
    text-align: end;
    margin: 10px;
`;

const TotalPrice = styled.span`
    display: block;
    padding: 2rem;
    font-size: 2rem;
    text-align: center;
`;

export default Wallet;
