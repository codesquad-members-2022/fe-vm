import styled from 'styled-components';

import { useWalletState } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

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
  const walletState = useWalletState();
  const messageDispatch = useMessageDispatch();
  const priceDispatch = usePriceDispatch();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    messageDispatch({
      type: 'INSERT_MESSAGE',
      unit: 0,
      message: `${priceState}원 반환됨`,
    });
    priceDispatch({ type: 'DELETE_ALL_PRICE' });
  };

  return (
    <>
      <ReturnMoneyWrapper>
        <button onClick={handleButtonClick}>반환</button>
      </ReturnMoneyWrapper>
    </>
  );
}
