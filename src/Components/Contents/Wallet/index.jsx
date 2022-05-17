import styled from 'styled-components';
import MessageBox from '../MessageBox';
import { ContentBox } from '../style';
import MoneyDtails from './MoneyDtails';
import MoneyTotal from './MoneyTotal';
import PayInfo from './PayInfo';

export default function Wallet() {
  return (
    <ContentBox>
      <Inner>
        <MoneyTotal />
        <MoneyDtails />
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
