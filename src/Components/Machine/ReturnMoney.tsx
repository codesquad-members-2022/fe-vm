import styled from 'styled-components';

const ReturnMoneyWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  text-align: center;
  line-height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  cursor: pointer;

  button {
    font-size: 20px;
    letter-spacing: 5px;
    color: #ff3533;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default function ReturnMoney(): JSX.Element {
  return (
    <>
      <ReturnMoneyWrapper>
        <button>반환</button>
      </ReturnMoneyWrapper>
    </>
  );
}
