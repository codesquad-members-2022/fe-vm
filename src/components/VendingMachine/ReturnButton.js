import styled from "styled-components";

export default function ReturnButton() {
  return <ReturnButtonWrapper>반환</ReturnButtonWrapper>;
}

const ReturnButtonWrapper = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 2px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.baeMint};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
`;
