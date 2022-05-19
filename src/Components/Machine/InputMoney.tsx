import styled from 'styled-components';
import { useState } from 'react';

import { useWalletState, useWalletDispatch } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

import { units } from '@/Constants';

const Input = styled.input`
  min-width: 200px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

const InputMoneyTitle = styled.div``;

export default function InputMoney(): JSX.Element {
  const [inputPrice, setInputPrice] = useState<number | undefined>(undefined);
  const priceState = usePriceState();
  const walletState = useWalletState();
  const walletDispatch = useWalletDispatch();
  const priceDispatch = usePriceDispatch();
  const messageDispatch = useMessageDispatch();

  let walletSumMoney = 0;

  walletState.forEach(wallet => {
    walletSumMoney += wallet.unit * wallet.count;
  });

  const isCheckUnit = (unit: number) => {
    for (const wallet of walletState) {
      if (wallet.unit === unit) {
        return wallet.count > 0 ? true : false;
      }
    }
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);

    if (value > walletSumMoney) {
      setInputPrice(walletSumMoney);
      return;
    }

    value ? setInputPrice(value) : setInputPrice(undefined);
  };

  const parsingUnit = (price: number | undefined) => {
    if (typeof price === undefined) return 0;
    else if (price < 10) return 10;

    let differenceValue = units[units.length - 1];
    let unitIdx = 0;

    [...units].forEach((unit, idx) => {
      if (differenceValue >= Math.abs(unit - price)) {
        unitIdx = idx;
        differenceValue = Math.abs(unit - price);
      }
    });

    return units[unitIdx];
  };

  const handleKeyPressEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (isNaN(inputPrice) || inputPrice < 0) return;
      else {
        const unit = parsingUnit(inputPrice);
        if (!isCheckUnit(unit)) {
          alert(`${unit}원이 지갑에 존재하지 않습니다.`);
          return;
        }

        if (unit > walletSumMoney) {
          alert('투입된 금액이 초과되었습니다.');
          return;
        }

        const message = `${unit}원이 투입됐음`;
        priceDispatch({ type: 'ADD_PRICE', price: unit });
        messageDispatch({ type: 'INSERT_MESSAGE', unit, message });
        walletDispatch({ type: 'DECREASE_WALLET_UNIT', unit, count: 1 });
        setInputPrice(undefined);
      }
    }
  };

  return (
    <>
      <InputMoneyTitle>투입 금액 : {priceState}원</InputMoneyTitle>
      <Input
        type="number"
        id="price"
        placeholder="금액을 입력해주세요."
        min="10"
        max="10000"
        value={inputPrice ?? ''}
        onChange={handlePriceChange}
        onKeyPress={handleKeyPressEvent}
      ></Input>
    </>
  );
}
