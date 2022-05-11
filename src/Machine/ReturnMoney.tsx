import styled from 'styled-components';

const ReturnMoneyWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function ReturnMoney(): JSX.Element {
  return (
    <>
      <ReturnMoneyWrapper></ReturnMoneyWrapper>
    </>
  );
}
