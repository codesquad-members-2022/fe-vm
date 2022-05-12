import styled from 'styled-components';
import { F_BetweenCenter } from '../../../Assets/Common.style';
import AddBtn from './AddBtn';
import PayInput from './Input';
import PayTotal from './Total';
import ReturnBtn from './ReturnBtn';

export default function PayBox() {
  return (
    <>
      <PayTotal />
      <Flex>
        <PayInput />
        <AddBtn />
      </Flex>
      <ReturnBtn />
    </>
  );
}

const Flex = styled.div`
  ${F_BetweenCenter}
  margin: 5px 0;

  button {
    width: 30%;
  }
`;
