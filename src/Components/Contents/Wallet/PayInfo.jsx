import { useContext } from 'react';
import styled from 'styled-components';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import {
  Color,
  FontSize,
  F_basic,
  F_BetweenCenter,
  Radius10,
} from '../../../Assets/Common.style';
import ReturnBtn from '../PayBox/ReturnBtn';
import PayTotal from '../PayBox/Total';

export default function PayInfo() {
  const { matchPayMoneyToWalletBalnace } = useContext(WalletMoneyContext);
  return (
    <InfoBox>
      <Pay>
        <span>투입 한 금액</span>
        <div>
          <PayTotal />
          <span>원</span>
        </div>
      </Pay>
      <ReturnBtn matchBalance={matchPayMoneyToWalletBalnace} />
    </InfoBox>
  );
}

const InfoBox = styled.div`
  ${F_BetweenCenter}
  gap: 10px;
  margin-bottom: 20px;

  button {
    width: 180px;
  }
`;

const Pay = styled.div`
  ${F_BetweenCenter}
  width: 100%;
  height: 60px;
  padding: 0 30px;
  ${Radius10}
  font-size: ${FontSize.MEDIUM};
  background: ${Color.BACKGROUND};

  > div {
    ${F_basic}
    gap: 10px;
  }
`;
