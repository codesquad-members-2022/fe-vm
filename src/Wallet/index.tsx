import styled from 'styled-components';
import Item from './Item';

interface TStyledView {
  children: JSX.Element | JSX.Element[];
}

const WalletGridWrapper = styled.section<TStyledView>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 30%;
  height: 700px;
  margin: 0 auto;
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

  return (
    <>
      <WalletGridWrapper>
        <>
          {/* {Object.entries(walletObj).forEach([key, vallue] => {
            console.log(key, value)
          })} */}
        </>
      </WalletGridWrapper>
    </>
  );
}
