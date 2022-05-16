import styled from "styled-components";

export default function MoneySlot() {
  return (
    <div>
      <MoneySlotInput placeholder="돈 넣으세요" />
    </div>
  );
}

const MoneySlotInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  text-align: right;
  font-size: 30px;
  :focus {
    outline: none;
  }
`;
