import styled from 'styled-components';

const Input = styled.input`
  height: 50px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function InputMoney(): JSX.Element {
  return (
    <>
      <Input placeholder="금액을 입력해주세요."></Input>
    </>
  );
}
