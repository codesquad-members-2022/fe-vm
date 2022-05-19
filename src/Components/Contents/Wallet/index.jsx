import styled from 'styled-components';
import { WalletMoneyProvider } from '../../../Context/WalletMoneyProvider';
import { PayProvider } from '../../../Context/PayProvider';
import { ContentBox } from '../style';
import MoneyTotal from './MoneyTotal';
import MoneyUnitInfo from './MoneyUnitInfo';
import PayInfo from './PayInfo';
import MessageBox from '../MessageBox';

export default function Wallet() {
  return (
    <WalletMoneyProvider>
      <ContentBox>
        <Inner>
          <MoneyTotal />
          <PayProvider>
            <MoneyUnitInfo />
            <PayInfo />
          </PayProvider>
          <MessageBox page="wallet" />
        </Inner>
      </ContentBox>
    </WalletMoneyProvider>
  );
}

const Inner = styled.div`
  padding: 0 20px;

  h3 {
    text-align: left;
  }
`;
