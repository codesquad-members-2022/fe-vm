import { useContext } from 'react';
import styled from 'styled-components';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import {
  Color,
  FontSize,
  F_basicCenter,
  F_BetweenCenter,
  Radius10,
} from '../../../Assets/Common.style';

export default function MoneyTotal() {
  const { convertMoneyTotal } = useContext(WalletMoneyContext);
  return (
    <MoneyContainer>
      <span>총액</span>
      <Flex>
        <Money>{convertMoneyTotal}</Money>
        <span>원</span>
      </Flex>
    </MoneyContainer>
  );
}

const MoneyContainer = styled.div`
  ${F_BetweenCenter};
  height: 80px;
  padding: 0 50px;
  ${Radius10};
  font-size: ${FontSize.X_LARGE};
  background: ${Color.BACKGROUND};
`;

const Flex = styled.div`
  ${F_basicCenter}
`;

const Money = styled.span`
  margin-right: 10px;
  text-align: right;
`;
