import styled from 'styled-components';
import { useState } from 'react';
import { useWalletState } from '@/Context/WalletContext';

const Input = styled.input`
  min-width: 200px;
  height: 50px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

export default function InputMoney(): JSX.Element {
  const [price, setPrice] = useState<number | undefined>(undefined);
  const walletState = useWalletState();
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

  return (
    <>
      <Input
        type="number"
        id="price"
        placeholder="금액을 입력해주세요."
        min="10"
        max="10000"
        value={price}
        onChange={handlePriceChange}
      ></Input>
    </>
  );
}
