import styled from 'styled-components';
import InputMoney from './InputMoney';

const ActionComponentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  background-color: skyblue;
  border-radius: 0 20px 20px 0;
  padding: 20px;
`;

export default function ActionComponentList(): JSX.Element {
  return (
    <>
      <ActionComponentWrapper>
        <InputMoney />
      </ActionComponentWrapper>
    </>
  );
}
