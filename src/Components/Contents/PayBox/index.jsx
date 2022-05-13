import styled from 'styled-components';
import { F_BetweenCenter } from '../../../Assets/Common.style';
import AddBtn from './AddBtn';
import PayInput from './Input';
import PayTotal from './Total';
import ReturnBtn from './ReturnBtn';
import { useRef } from 'react';

export default function PayBox({ payTotal, payMoney, message }) {
  const input = useRef(null);
  return (
    <>
      <PayTotal value={payTotal.value} />
      <Flex>
        <PayInput setPayMoney={payMoney.set} input={input} />
        <AddBtn
          payTotal={payTotal}
          payMoney={payMoney.value}
          input={input}
          message={message}
        />
      </Flex>
      <ReturnBtn />
    </>
  );
}

const Flex = styled.form`
  ${F_BetweenCenter}
  margin: 5px 0;

  button {
    width: 30%;
  }
`;
