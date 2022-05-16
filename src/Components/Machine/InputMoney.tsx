import styled from 'styled-components';
import { useState } from 'react';

import { useWalletState } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

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
  const [price, setPrice] = useState<number | undefined>(undefined);
  const priceState = usePriceState();
  const walletState = useWalletState();
  const priceDispatch = usePriceDispatch();
  const messageDispatch = useMessageDispatch();
  let sumPrice = 0;

  walletState.forEach(wallet => {
    sumPrice += wallet.unit * wallet.count;
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);

    if (value > sumPrice) {
      setPrice(sumPrice);
      return;
    }

    value ? setPrice(value) : setPrice(undefined);
  };

  const parsingUnit = (price: number | undefined) => {
    if (typeof price === undefined) return 0;
    else if (price < 10) return 10;

    return Math.floor(price / 10) * 10;
  };

  const handleKeyPressEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      if (isNaN(price) || price < 0) return;

      const unit = parsingUnit(price);
      const message = `${unit}원이 투입됐음`;
      priceDispatch({ type: 'ADD_PRICE', price: unit });
      messageDispatch({ type: 'INSERT_MESSAGE', unit, message });
      setPrice(undefined);

      // 지갑에서 금액만큼 차감
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
        value={price ?? ''}
        onChange={handlePriceChange}
        onKeyPress={handleKeyPressEvent}
      ></Input>
    </>
  );
}
