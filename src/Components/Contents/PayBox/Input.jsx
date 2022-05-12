import styled from 'styled-components';
import {
  Color,
  FontSize,
  F_Center,
  Radius10,
} from '../../../Assets/Common.style';

export default function PayInput() {
  return (
    <InputBox>
      <input type="number" placeholder="0" />
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
  background: ${Color.BACKGROUND};

  input {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    text-align: right;
    font-size: ${FontSize.MEDIUM};

    &::placeholder {
      color: ${Color.GRAY};
    }
  }
`;
