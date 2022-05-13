import styled from 'styled-components';
import { changeNumToLocalMoney } from '../../../Utils/utils';
import {
  Color,
  FontSize,
  F_Center,
  Radius10,
} from '../../../Assets/Common.style';

export default function PayInput({ setPayMoney, input }) {
  const payMoneyHandler = () => {
    const formatNum = input.current.value.replace(/[^0-9]|,/g, ''); // 숫자 아닐때 공백처리
    setPayMoney(formatNum);
    input.current.value = changeNumToLocalMoney(formatNum);
  };

  return (
    <InputBox>
      <input
        type="text"
        placeholder="0"
        onChange={payMoneyHandler}
        ref={input}
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
