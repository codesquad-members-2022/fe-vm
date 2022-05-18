import styled from 'styled-components';

function MoneySlot() {
  return (
    <>
      <Input type="text" value={0} />
    </>
  );
}

const Input = styled.input`
  position: absolute;
  width: 230px;
  height: 50px;
  top: 370px;
  right: 175px;
  font-size: ${({ theme }) => theme.fontSize.large};
`;
export default MoneySlot;
