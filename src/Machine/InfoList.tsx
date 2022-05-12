import styled from 'styled-components';
import InputMoney from '@/Machine/InputMoney';
import ReturnMoney from '@/Machine/ReturnMoney';
import StackMessage from '@/Machine/StackMessage';

const InfoListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  background-color: skyblue;
  border-radius: 0 20px 20px 0;
  padding: 20px;
`;

export default function InfoList(): JSX.Element {
  return (
    <>
      <InfoListWrapper>
        <InputMoney />
        <ReturnMoney />
        <StackMessage />
      </InfoListWrapper>
    </>
  );
}
