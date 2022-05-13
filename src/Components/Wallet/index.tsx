import styled from 'styled-components';
import Item from '@/Components/Wallet/Item';
import { useWalletState } from '@/Context/WalletContext';

interface TStyledView {
  children: JSX.Element | JSX.Element[];
}

const WalletGridWrapper = styled.section<TStyledView>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 10px;
  grid-gap: 20px;
  width: 40%;
  height: 700px;
  margin: 0 auto;
  border-radius: 20px;
  border: 5px solid ${({ theme }) => theme.colors.ultramarine};
`;

const WalletSumComponent = styled.div`
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.ultramarine};
`;

export default function Wallet(): JSX.Element {
  const walletState = useWalletState();

  let sum = 0;

  return (
    <>
      <WalletGridWrapper>
        <>
          {walletState.map(wallet => {
            sum += wallet.unit * wallet.count;
            return (
              <Item key={wallet.uuid} unit={wallet.unit} count={wallet.count} />
            );
          })}
        </>
        <WalletSumComponent>{sum}원</WalletSumComponent>
      </WalletGridWrapper>
    </>
  );
}
