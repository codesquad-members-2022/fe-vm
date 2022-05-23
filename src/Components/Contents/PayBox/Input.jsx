import { useContext } from 'react';
import styled from 'styled-components';
import { PayMoneyContext } from '../../../Context/PayProvider';
import {
  Color,
  FontSize,
  F_Center,
  Radius10,
} from '../../../Assets/Common.style';

export default function PayInput() {
  const { setPayMoney, convertPayMoney } = useContext(PayMoneyContext);
  const changeInputHandler = ({ target }) => {
    setPayMoney(target.value);
    convertPayMoney(target.value);
  };

  return (
    <InputBox>
      <input
        type="text"
        placeholder="0"
        onChange={changeInputHandler}
        value={convertPayMoney()}
      />
      <span>원</span>
    </InputBox>
  );
}

const InputBox = styled.div`
  ${F_Center}
  width: 67%;
  height: 60px;
  padding: 0 10px;
  ${Radius10}
  font-size: ${FontSize.MEDIUM};
  background: ${Color.BACKGROUND};

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    text-align: right;

    &::placeholder {
      color: ${Color.GRAY};
    }
  }
`;
