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
  const walletList = [
    { uuid: 1, unit: 10, count: 0 },
    { uuid: 2, unit: 50, count: 1 },
    { uuid: 3, unit: 100, count: 5 },
    { uuid: 4, unit: 500, count: 5 },
    { uuid: 5, unit: 1000, count: 2 },
    { uuid: 6, unit: 5000, count: 2 },
    { uuid: 7, unit: 10000, count: 1 },
  ];

  let sum = 0;

  return (
    <>
      <WalletGridWrapper>
        <>
          {walletList.map(wallet => {
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
