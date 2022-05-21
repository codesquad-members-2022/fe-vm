import styled from 'styled-components';

export const StyledMyMoney = styled.div`
  margin: 30px auto;
  width: 300px;
  height: 130px;
  line-height: 130px;
  font-size: 30px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.darkGray};
`;
