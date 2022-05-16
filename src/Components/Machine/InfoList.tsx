import styled from 'styled-components';
import InputMoney from '@/Components/Machine/InputMoney';
import ReturnMoney from '@/Components/Machine/ReturnMoney';
import BoardMessage from '@/Components/Machine/BoardMessage';

const InfoListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  ${({ theme }) => theme.mixins.flexBox('column', 'center', 'space-between')};
  width: 30%;
  background-color: ${({ theme }) => theme.colors.ultramarine};
  border-radius: 0 20px 20px 0;
  padding: 20px;
`;

export default function InfoList(): JSX.Element {
  return (
    <>
      <InfoListWrapper>
        <InputMoney />
        <ReturnMoney />
        <BoardMessage />
      </InfoListWrapper>
    </>
  );
}
