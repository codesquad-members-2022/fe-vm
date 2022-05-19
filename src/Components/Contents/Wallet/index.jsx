import styled from 'styled-components';
import { ContentBox } from '../style';
import MoneyTotal from './MoneyTotal';
import MoneyUnitInfo from './MoneyUnitInfo';
import PayInfo from './PayInfo';
import MessageBox from '../MessageBox';

export default function Wallet() {
  return (
    <ContentBox>
      <Inner>
        <MoneyTotal />
        <MoneyUnitInfo />
        <PayInfo />
        <MessageBox page="wallet" />
      </Inner>
    </ContentBox>
  );
}

const Inner = styled.div`
  padding: 0 20px;

  h3 {
    text-align: left;
  }
`;
