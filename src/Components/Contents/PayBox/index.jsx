import { useContext } from 'react';
import styled from 'styled-components';
import { WalletMoneyContext } from '../../../Context/WalletMoneyProvider';
import {
  F_BetweenCenter,
  FontSize,
  Color,
  Radius10,
} from '../../../Assets/Common.style';
import AddBtn from './AddBtn';
import PayInput from './Input';
import PayTotal from './Total';
import ReturnBtn from './ReturnBtn';

export default function PayBox() {
  const { matchPayMoneyToWalletBalnace } = useContext(WalletMoneyContext);

  return (
    <>
      <TotalBox>
        <PayTotal />
      </TotalBox>
      <Flex>
        <PayInput />
        <AddBtn matchBalance={matchPayMoneyToWalletBalnace} />
      </Flex>
      <ReturnBtn matchBalance={matchPayMoneyToWalletBalnace} />
    </>
  );
}

const TotalBox = styled.div`
  height: 60px;
  padding: 0 20px;
  ${Radius10}
  font-family: 'Koulen', cursive;
  text-align: right;
  font-size: ${FontSize.X_LARGE};
  line-height: 60px;
  letter-spacing: 0.2em;
  color: ${Color.ORANGE[100]};
  background: ${Color.BLACK};
`;

const Flex = styled.form`
  ${F_BetweenCenter}
  margin: 5px 0;

  button {
    width: 30%;
  }
`;
