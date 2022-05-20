import styled from 'styled-components';

import { useWalletDispatch } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

import keepTheChange from '@/Utils/keepTheChange';

const ReturnMoneyWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  text-align: center;
  line-height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  button {
    width: 100%;
    height: 100%;
    font-size: 20px;
    letter-spacing: 5px;
    color: #ff3533;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default function ReturnMoney(): JSX.Element {
  const priceState = usePriceState();
  const walletDispatch = useWalletDispatch();
  const messageDispatch = useMessageDispatch();
  const priceDispatch = usePriceDispatch();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (priceState === 0) {
      alert('반환할 금액이 없습니다.');
      return;
    }

    keepTheChange(priceState, walletDispatch, priceDispatch, messageDispatch);
  };

  return (
    <>
      <ReturnMoneyWrapper>
        <button onClick={handleButtonClick}>반환</button>
      </ReturnMoneyWrapper>
    </>
  );
}
