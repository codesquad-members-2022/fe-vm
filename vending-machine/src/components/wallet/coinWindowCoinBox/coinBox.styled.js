import styled from 'styled-components';

export const StyledCoinBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 100px;
  line-height: 100px;
`;

export const StyledCoinBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.darkGray};
  width: 130px;
  height: 90%;
  text-align: center;
  font-size: 26px;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.red};
  }
`;
