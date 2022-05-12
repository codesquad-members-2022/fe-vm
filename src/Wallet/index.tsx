import styled from 'styled-components';
import Item from '@/Wallet/Item';

interface TStyledView {
  children: JSX.Element | JSX.Element[];
}

const WalletGridWrapper = styled.section<TStyledView>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px 10px;
  grid-gap: 20px;
  width: 30%;
  height: 700px;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

const WalletSumComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function Wallet(): JSX.Element {
  const walletObj = {
    '10': 0,
    '50': 1,
    '100': 5,
    '500': 5,
    '1000': 2,
    '5000': 2,
    '10000': 1,
  };

  let sum = 0;

  return (
    <>
      <WalletGridWrapper>
        <>
          {Object.entries(walletObj).map(row => {
            const [k, v] = row;
            sum += +k * v;
            return <Item key={k} money={k} count={v} />;
          })}
        </>
        <WalletSumComponent>{sum}원</WalletSumComponent>
      </WalletGridWrapper>
    </>
  );
}
