import { useContext } from 'react';
import styled from 'styled-components';
import {
  changeNumToLocalMoney,
  replaceNotNumToSpace,
} from '../../../Utils/utils';
import {
  Color,
  FontSize,
  F_Center,
  Radius10,
} from '../../../Assets/Common.style';
import { payContext } from '../VendingMachine';

export default function PayInput() {
  const { payMoney, setPayMoney } = useContext(payContext);
  const payMoneyHandler = ({ target }) => {
    const formatNum = replaceNotNumToSpace(target.value);
    target.value = changeNumToLocalMoney(formatNum);
    setPayMoney(target.value);
  };

  return (
    <InputBox>
      <input
        type="text"
        placeholder="0"
        onChange={payMoneyHandler}
        value={payMoney}
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
